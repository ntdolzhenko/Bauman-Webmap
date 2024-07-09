from django.urls import path
from django.contrib.auth import views as auth_views
from .views import (
    home_view, profile_view, mainBuild_map_view, branches_map_view, 
    industry_faculties_map_view, sport_map_view, dorms_map_view, 
    other_map_view, RegisterView
)

urlpatterns = [
    path('', home_view, name='home'),
    path('profile/', profile_view, name='profile'),
    path('maps/', mainBuild_map_view, name='start_map'),
    path('maps/main_buildings', mainBuild_map_view, name='main_buildings_map'),
    path('maps/branches', branches_map_view, name='branches_map'),
    path('maps/industry_faculties', industry_faculties_map_view, name='industry_faculties_map'),
    path('maps/sport', sport_map_view, name='sport_map'),
    path('maps/dorms', dorms_map_view, name='dorms_map'),
    path('maps/other', other_map_view, name='other_map'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
]