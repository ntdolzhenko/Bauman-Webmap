from django.contrib import admin
from .models import Buildings, BuildingsImage, Favourite_Places, GroupBuildings


class GroupBuildingsAdmin(admin.ModelAdmin):
    list_display = ('name',)

class BuildingImageInline(admin.TabularInline):
    model = BuildingsImage
    extra = 1

class BuildingAdmin(admin.ModelAdmin):
    list_display = ('name', 'location')
    inlines = [BuildingImageInline]

class FavouritePlaceAdmin(admin.ModelAdmin):
    list_display = ('user', 'building', 'added_at', 'status')

admin.site.register(GroupBuildings, GroupBuildingsAdmin)
admin.site.register(Buildings, BuildingAdmin)
admin.site.register(Favourite_Places, FavouritePlaceAdmin)
# Register your models here.