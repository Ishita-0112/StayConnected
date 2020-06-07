from django.conf.urls import url
from .views import meetups_view, meetups_detail_view, add_meetups

urlpatterns = [
    url(r'^$', meetups_view, name='list'),
    url(r'^add/$', add_meetups, name='add'),
    url(r'^meetup/(?P<meetup_id>[\w-]+)/$', meetups_detail_view, name='detail'),
]
