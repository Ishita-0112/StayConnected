from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from meetups.models import Meetup


class Event(models.Model):
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    # description = models.CharField(max_length=300, null=True, blank=True)
    # venue = models.CharField(max_length=120, null=True, blank=True)
    # date = models.DateField(null=True, blank=True)
    # time = models.TimeField(null=True, blank=True)
    # date_added = models.DateTimeField(auto_now_add=True)
    # count = models.IntegerField(default)
    meetup = models.ForeignKey(Meetup , on_delete = models.CASCADE,primary_key = True)

    def __str__(self):
        return self.meetup.title


User = get_user_model()


class Enrolled(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_enrolled = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.event.title
