from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import FormView

from .forms import RegisterForm


@login_required
def profile_view(request):
    return render(request, 'main/profile.html')

@login_required
def home_view(request):
    return render(request, 'main/home.html')

def login_view(request):
    return render(request, 'registration/login.html')

class RegisterView(FormView):
    form_class = RegisterForm
    template_name = 'registration/register.html'
    success_url = '/profile'
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)