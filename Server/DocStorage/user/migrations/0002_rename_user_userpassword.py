# Generated by Django 4.2.7 on 2023-12-03 07:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='UserPassword',
        ),
    ]
