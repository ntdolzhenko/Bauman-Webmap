from django.contrib.auth.forms import UserCreationForm
from .models import User
from django import forms


class RegisterForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + ('email', 'first_name', 'last_name', 'email', 'phone', 'group')


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phone', 'group']
        labels = {
            'first_name': 'Имя',
            'last_name': 'Фамилия',
            'email': 'Почта',
            'phone': 'Телефон',
            'group': 'Группа'
        }