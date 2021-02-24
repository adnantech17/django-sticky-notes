from django.db import models
from django import forms
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    note_title = models.CharField(max_length=100, default="")
    note_description = models.TextField(default="")
    writer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.id) + " " + self.note_title
