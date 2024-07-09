# Generated by Django 5.0.6 on 2024-07-09 12:40

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Buildings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('short_name', models.CharField(default='', max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=200)),
                ('coordinate', models.TextField(blank=True, default='')),
                ('website', models.TextField(blank=True, default='')),
            ],
        ),
        migrations.CreateModel(
            name='GroupBuildings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('base_style', models.CharField(blank=True, max_length=200)),
                ('highlighted_style', models.CharField(blank=True, max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(max_length=150, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BuildingsImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='building_photos/')),
                ('description', models.CharField(blank=True, max_length=255)),
                ('Building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='main.buildings')),
            ],
        ),
        migrations.CreateModel(
            name='Favourite_Places',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('Added', 'Добавлено'), ('Not_added', 'Не добавлено')], default='Not_added', max_length=50)),
                ('building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favourited_by', to='main.buildings')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favourite_places', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='buildings',
            name='building_group',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='GroupBuildings', to='main.groupbuildings'),
        ),
    ]
