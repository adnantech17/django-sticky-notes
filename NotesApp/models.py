from django.db import models
from django import forms

# Create your models here.


class Note(models.Model):
    notetext = models.CharField(max_length=100, default="")
