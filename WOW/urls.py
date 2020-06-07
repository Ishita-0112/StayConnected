from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.auth.views import LogoutView
from django.contrib.auth import views as auth_views
from django.conf.urls import url

from home.views import home_view, about_view, contact_view
from accounts.views import login_page, register_page

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', home_view, name="home"),
    url(r'^about/', about_view, name="about"),
    url(r'^contact/', contact_view, name="contact"),
    url(r'^login/', login_page, name="login"),
    url(r'^logout', LogoutView.as_view(), name="logout"),
    url(r'^registration/', register_page, name="register"),
    url(r'^events/', include(('events.urls', 'events'), namespace='events')),
    url(r'^meetups/', include(('meetups.urls', 'meetups'), namespace='meetups')),
    url(r'^jobs/', include(('jobs.urls', 'jobs'), namespace='jobs')),
    url(r'^communities/', include(('communities.urls', 'communities'), namespace='communities')),
    url(r'^search/', include(('search.urls', 'search'), namespace='search')),

    url(r'^password_reset/$', auth_views.PasswordResetView.as_view(template_name='accounts/password_reset.html'), name='password_reset'),
    url(r'^password_reset/done/$', auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html'), name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',auth_views.PasswordResetConfirmView.as_view(template_name='accounts/password_reset_confirm.html'), name='password_reset_confirm'),
    url(r'^reset/done/$', auth_views.PasswordResetCompleteView.as_view(template_name='accounts/password_reset_complete.html'), name='password_reset_complete'),
    path('admindash/',include('admindash.urls')),


]
urlpatterns += staticfiles_urlpatterns()


#