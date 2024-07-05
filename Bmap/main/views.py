from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def profile_view(request):
    return render(request, 'main/profile.html')

def home(request):
    return render(request, 'main/home.html')
