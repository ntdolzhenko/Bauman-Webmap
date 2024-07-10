
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import FormView
from .models import Buildings, GroupBuildings
from .forms import RegisterForm

def get_points_data(name_of_group):
    group = GroupBuildings.objects.get(name=name_of_group)
    buildings = Buildings.objects.all().filter(building_group_id=group.id)
    group_json = {
        'name': group.name,
        'base_style': group.base_style,
        'highlighted_style': group.highlighted_style
    }
    buildings_json = []
    for building in buildings:
        buildings_json.append({
            'center': building.coordinate,
            'ballonBody': [
                '<address>',
                '<strong>' + building.name + '</strong>',
                '<br/>',
                'Адрес: ' + building.location,
                '<br/>',
                'Подробнее: <a href="' + building.website + '</a>',
            ],
            'name': building.short_name
        })

    return {'group_json': group_json, 'buildings_json': buildings_json}

@login_required
def profile_view(request):
    return render(request, 'main/profile.html')

@login_required
def home_view(request):
    return render(request, 'main/home.html')

def about_view(request):
    return render(request, 'main/about.html')
def mainBuild_map_view(request):
    context = get_points_data("Основные учебные корпуса")
    return render(request, 'maps/main_buildings_map.html', context)
def branches_map_view(request):
    context = get_points_data("Филиалы МГТУ им. Н.Э. Баумана")
    return render(request, 'maps/branches_map.html', context)
def industry_faculties_map_view(request):
    context = get_points_data("Учебные корпуса отраслевых факультетов")
    return render(request, 'maps/industry_faculties_map.html', context)
def sport_map_view(request):
    context = get_points_data("Спорт")
    return render(request, 'maps/sport_map.html', context)
def dorms_map_view(request):
    context = get_points_data("Общежития")
    return render(request, 'maps/dorms_map.html', context)
def other_map_view(request):
    context = get_points_data("Другое")
    return render(request, 'maps/other_map.html', context)

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

