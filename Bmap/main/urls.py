# main/urls.py
from django.urls import path
from .views import home, profile_view, maps_view

urlpatterns = [
    path('', home, name='home'),
    path('profile/', profile_view, name='profile'),
    path('maps/', maps_view, name='maps'),
]