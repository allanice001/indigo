# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-03-08 14:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indigo_api', '0094_remove_document_stub'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationdocument',
            name='size',
            field=models.IntegerField(null=True),
        ),
    ]
