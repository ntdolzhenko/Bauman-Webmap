from django.db import models

from  django.contrib.auth.models import User

class Buildings(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    description = models.TextField()
    def str(self):
        return self.name


class BuildingsImage(models.Model):
    Building = models.ForeignKey(
        Buildings,
        related_name="photos",
        on_delete=models.CASCADE        # Удаляем Building удаляются и все связанные Photos
    )
    image = models.ImageField(upload_to='building_photos/')  # Надо будет папку создать, сюда все фотки грузим
    description = models.CharField(max_length=255, blank=True)


class Favourite_Places(models.Model):
    STATUS_CHOICES = [
        ('Added', 'Добавлено'),
        ('Not_added', 'Не добавлено')]
    user = models.ForeignKey(
        User,
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
