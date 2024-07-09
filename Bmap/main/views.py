from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.generic import FormView
from .forms import RegisterForm
from .forms import UserUpdateForm

@login_required
def profile_view(request):
    user = request.user
    return render(request, 'main/profile.html', {'user': user})

@login_required
def profile_update(request):
    if request.method == 'POST':
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = UserUpdateForm(instance=request.user)
    return render(request, 'main/profile_update.html', {'form': form})

@login_required
def home_view(request):
    return render(request, 'main/home.html')

def about_view(request):
    return render(request, 'main/about.html')
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

def login_view(request):
    return render(request, 'registration/login.html')

class RegisterView(FormView):
    form_class = RegisterForm
    template_name = 'registration/register.html'
    success_url = '/profile'
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

def e_handler403(request, exception=None):
    return render(request, '403.html')
def e_handler404(request, exception=None):
    return render(request, '404.html')
def e_handler500(request, exception=None):
    return render(request, '500.html')
