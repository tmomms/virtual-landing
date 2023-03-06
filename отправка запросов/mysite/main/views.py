from django.shortcuts import render

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import MyModel
from django.views import View

class MyView(View):
    def get(self, request):
        # Получить данные из базы данных
        data = {'key': 'value'}

        # Вернуть данные в формате JSON
        return render(request, 'index.html', {'data':data})


@csrf_exempt
def save_data(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        my_model = MyModel(name=data['name'], first_name=data['first_name'])
        my_model.save()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})
