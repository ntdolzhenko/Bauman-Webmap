# main/urls.py
from django.urls import path
from django.contrib.auth import views as auth_views
from .views import home_view, profile_view, RegisterView

urlpatterns = [
    path('', home_view, name='home'),
    path('profile/', profile_view, name='profile'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('register', RegisterView.as_view(), name='register'),
]
