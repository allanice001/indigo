# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-04-23 19:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('indigo_api', '0046_works_for_amendments'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='amendment_events',
        ),
    ]
