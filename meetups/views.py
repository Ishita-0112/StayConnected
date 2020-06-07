from django.shortcuts import render, redirect
from django.db.models import F

from .models import Meetup
from .forms import AddMeetup
from events.models import Event

def meetups_view(request):
    meetups = Meetup.objects.all()
    # enrolled = Enrolled.objects.all()

    context = {
        "meetups": meetups,
        "title": "Meetups",
    }
    return render(request, "meetups/meetups.html", context)


def meetups_detail_view(request, meetup_id):
    meetup = Meetup.objects.get(id=meetup_id)

    context = {
        "title": meetup.title,
        "meetup": meetup,
    }
    if request.method == "POST":
        print("YOYO")
        events = Event.objects.create(user = request.user,meetup = meetup )
        meetup_new = Meetup.objects.get(id=meetup_id)

        meetup_new.count = F('count') + 1
        meetup_new.save()
        return render(request, "meetups/meetups.html", context)
    else:
        return render(request, "meetups/detail.html", context)

def add_meetups(request):
    if request.user.is_authenticated:
        # form = AddMeetup()
        context = {
            "title": "Add Meetup",
            # "form": form,
        }
        if request.method == "POST":
            title = request.POST['title']
            address = request.POST['address']
            location = request.POST['location']
            description = request.POST['description']
            date = request.POST['date']
            time = request.POST['time']

            meetup = Meetup.objects.create(title=title ,address=address , location=location ,description=description,date=date,time=time)
            meetup.save()
        return render(request, "meetups/add.html", context)
    else:
        return redirect('/login/')