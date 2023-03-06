from django.urls import path
from . import views

urlpatterns = [
    path('', views.MyView.as_view(), name='ajax_data'),
    path('save_data/', views.save_data, name='save_data'),
]
