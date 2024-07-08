from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def profile_view(request):
    return render(request, 'main/profile.html')

def home(request):
    return render(request, 'main/home.html')
def mainBuild_map_view(request):
    return render(request, 'maps/main_buildings_map.html')
def branches_map_view(request):
    return render(request, 'maps/branches_map.html')
def industry_faculties_map_view(request):
    return render(request, 'maps/industry_faculties_map.html')
def sport_map_view(request):
    return render(request, 'maps/sport_map.html')
def dorms_map_view(request):
    return render(request, 'maps/dorms_map.html')
def other_map_view(request):
    return render(request, 'maps/other_map.html')


def e_handler403(request, exception=None):
    return render(request, '403.html')
def e_handler404(request, exception=None):
    return render(request, '404.html')
def e_handler500(request, exception=None):
    return render(request, '500.html')
