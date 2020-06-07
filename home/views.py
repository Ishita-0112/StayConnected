from django.shortcuts import render
from events.models import Event
from jobs.models import Job
from communities.models import Community
from meetups.models import Meetup

def home_view(request):
    events = Event.objects.all()
    jobs = Job.objects.all()
    communities = Community.objects.all()
    meetups = Meetup.objects.all()
    context = {
        'events': events,
        'jobs': jobs,
        'communities': communities,
        'meetups': meetups,
        'title': 'Home',
    }
    return render(request, 'home/home.html', context)


def about_view(request):
    context = {
        'title': 'About Us',
    }
    return render(request, 'home/about.html', context)


def contact_view(request):
    context = {
        'title': 'Contact',
    }
    return render(request, 'home/contact.html', context)
