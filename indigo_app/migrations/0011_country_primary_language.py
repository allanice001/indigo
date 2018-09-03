# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-20 17:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('indigo_app', '0010_accepted_terms'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='primary_language',
            field=models.ForeignKey(help_text=b'Primary language for this country', null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='indigo_app.Language'),
        ),
    ]