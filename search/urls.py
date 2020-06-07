from django.urls import path

from .views import HomePageView, SearchResultsView

urlpatterns = [
    path('results/', SearchResultsView, name='results'),
    path('', HomePageView.as_view(), name='search'),
]