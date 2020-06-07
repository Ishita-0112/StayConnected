from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView
from django.db.models import Q

from jobs.models import Job
from events.models import Event
from meetups.models import Meetup
from communities.models import Community

class HomePageView(TemplateView):
    template_name = 'search/search.html'


def SearchResultsView(request):
    context = {
        "title": "result",
    }
    if request.method == "POST":
        query = request.POST.get('q', None)
        context['query'] = query
       
        job_result = Job.objects.filter(Q(title__icontains=query) | Q(description__icontains=query) | Q(address__icontains=query) | Q(seniority__icontains=query) | Q(seniority__icontains=query)              | Q(employment__icontains=query) | Q(role__icontains=query))
        event_result = Event.objects.filter(Q(title__icontains=query) | Q(description__icontains=query) |  Q(venue__icontains=query))
        meetup_result = Meetup.objects.filter(Q(title__icontains=query) | Q(description__icontains=query) | Q(address__icontains=query) | Q(location__icontains=query))
        communitie_result = Community.objects.filter(Q(title__icontains=query) | Q(description__icontains=query))
        total = job_result.count() + event_result.count() + meetup_result.count() + communitie_result.count()

        context['total'] = total
        context['jobs'] = job_result
        context['events'] = event_result
        context['meetups'] =meetup_result
        context['communities'] = communitie_result
       
    return render(request, "search/results.html", context)