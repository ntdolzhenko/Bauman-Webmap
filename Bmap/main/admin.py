from django.contrib import admin
from .models import Buildings, BuildingsImage, Favourite_Places


class BuildingImageInline(admin.TabularInline):
    model = BuildingsImage
    extra = 1

class BuildingAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'description')
    inlines = [BuildingImageInline]

class FavouritePlaceAdmin(admin.ModelAdmin):
    list_display = ('user', 'building', 'added_at', 'status')

admin.site.register(Buildings, BuildingAdmin)
admin.site.register(Favourite_Places, FavouritePlaceAdmin)
# Register your models here.