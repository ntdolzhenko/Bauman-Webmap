# Generated by Django 5.0.6 on 2024-07-09 23:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_user_second_name_user_fio_user_last_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='fio',
        ),
    ]