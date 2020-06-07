from django.shortcuts import render
from meetups.models import Meetup
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render
from meetups.models import Meetup
from django.views.decorators.csrf import csrf_exempt
from meetups.models import Meetup

# Create your views here.
def home(request):

    event = Meetup.objects.all()


    return render(request,'admindash/admin.html',{"events":event})

@csrf_exempt
def pie_chart(request):
    labels = []
    data = []

    queryset = Meetup.objects.order_by('-count')[:5]
    for event in queryset:
        labels.append(event.title)
        data.append(event.count)

    return render(request, 'pie_chart.html', {
        'labels': labels,
        'data': data,
    })
@csrf_exempt
def line_chart(request):
    labels = []
    data = []

    queryset = Meetup.objects.order_by('-count')
    for event in queryset:
        labels.append(event.title)
        data.append(event.count)

    return render(request, 'line_chart.html', {
        'labels': labels,
        'data': data,
    })