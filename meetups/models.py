from django.db import models


class Meetup(models.Model):
    title = models.CharField(max_length=120)
    address = models.CharField(max_length=1200)
    location = models.CharField(max_length=120)
    description = models.TextField(max_length=3000)
    date = models.DateField()
    time = models.TimeField()
    attendance = models.IntegerField(default=0, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    count = models.IntegerField(default=0)


    def __str__(self):
        return self.title
