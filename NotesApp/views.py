from django.shortcuts import render
from .forms import NoteForm
from django.http import HttpResponse

# Create your views here.


def home(request):
    noteform = NoteForm()
    if request.method == 'POST':
        return HttpResponse(status=204)
    return render(request, "NotesApp/home.html", {"form": noteform})
