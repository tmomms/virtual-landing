from django.contrib import admin
from .models import MyModel


@admin.register(MyModel)
class ModelAdmin(admin.ModelAdmin):
    list_display = ['name', 'first_name']