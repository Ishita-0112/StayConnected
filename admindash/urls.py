from django.urls import path
from . import views

app_name = 'admindash'

urlpatterns = [
    path('', views.home , name='admin'),
    # path('<int:albumid>/songs/' , views.index , name="index"),
    path('pie-chart/', views.pie_chart, name='pie-chart'),
    path('line-chart/', views.line_chart, name='line-chart'),



    # path('song/',views.song , name="song")
]