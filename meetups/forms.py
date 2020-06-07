from django import forms
from .models import Meetup


class AddMeetup(forms.ModelForm):
    class Meta:
        model = Meetup
        exclude = {'attendence'}
        fields  = [
            'title',
            'address',
            'location',
            'description',
            'date',
            'time'
        ]
        widgets = {
            'date': forms.DateInput(attrs={'class': 'datepicker'}),
        }