from django import forms


class NoteForm(forms.Form):
    notetext = forms.CharField(max_length=100, label='', widget=forms.Textarea)
