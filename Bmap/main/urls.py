# main/urls.py
from django.urls import path
from .views import home, profile_view, mainBuild_map_view, branches_map_view, industry_faculties_map_view, sport_map_view, dorms_map_view, other_map_view

urlpatterns = [
    path('', home, name='home'),
    path('profile/', profile_view, name='profile'),
    path('maps/', mainBuild_map_view, name='start_map'),
    path('maps/main_buildings', mainBuild_map_view, name='main_buildings_map'),
    path('maps/branches', branches_map_view, name='branches_map'),
    path('maps/industry_faculties', industry_faculties_map_view, name='industry_faculties_map'),
    path('maps/sport', sport_map_view, name='sport_map'),
    path('maps/dorms', dorms_map_view, name='dorms_map'),
    path('maps/other', other_map_view, name='other_map'),
]