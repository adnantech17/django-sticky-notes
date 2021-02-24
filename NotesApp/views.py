from django.shortcuts import render, redirect
from .forms import NoteForm
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Note
from django.http import HttpResponseForbidden
import os
from NotesProject.settings import BASE_DIR
from dotenv import load_dotenv

# Create your views here.


@login_required
def home(request):
    allNotes = Note.objects.filter(writer=request.user)
    if request.method == 'POST':
        form = NoteForm(request.POST)
        if form.is_valid():
            form.instance.writer = request.user
            form.save()
            return render(request, "NotesApp/home.html", {"form": form, "notes": allNotes})

    else:
        form = NoteForm()

    return render(request, "NotesApp/home.html", {"form": form, "notes": allNotes})


def update(request, pk):
    item = Note.objects.get(id=pk)
    if item.writer != request.user:
        return HttpResponseForbidden()
    if request.method == 'POST':
        form = NoteForm(request.POST, instance=item)
        if form.is_valid():
            form.instance.writer = request.user
            form.save()
            return redirect('/')

    form = NoteForm(instance=item)
    print(form)
    return render(request, "NotesApp/full_note.html", {"form": form})


def delete(request, pk):
    item = Note.objects.get(id=pk)
    if item.writer != request.user:
        return HttpResponseForbidden()
    item.delete()
    return redirect('/')
