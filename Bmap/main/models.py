from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class GroupBuildings(models.Model):
    name = models.CharField(max_length=100)
    base_style = models.CharField(max_length=200, blank=True)
    highlighted_style = models.CharField(max_length=200, blank=True)


class Buildings(models.Model):
    building_group = models.ForeignKey(
        GroupBuildings,
        on_delete=models.CASCADE,
        related_name='GroupBuildings',
        default=1)
    short_name = models.CharField(max_length=100, default='')
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    coordinate = models.TextField(blank=True, default='')
    website = models.TextField(blank=True, default='')

    def __str__(self):
        return self.name


class BuildingsImage(models.Model):
    Building = models.ForeignKey(
        Buildings,
        related_name="photos",
        on_delete=models.CASCADE  # When a Building is deleted, all related Photos are also deleted
    )
    image = models.ImageField(upload_to='building_photos/')  # Create this folder to store photos
    description = models.CharField(max_length=255, blank=True)


class Favourite_Places(models.Model):
    STATUS_CHOICES = [
        ('Added', 'Добавлено'),
        ('Not_added', 'Не добавлено')]
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Use the custom user model
        on_delete=models.CASCADE,
        related_name="favourite_places")
    building = models.ForeignKey(
        Buildings,
        on_delete=models.CASCADE,
        related_name='favourited_by')
    added_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default="Not_added"
    )


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    phone = models.CharField(max_length=20, blank=True)
    group = models.CharField(max_length=20, blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
