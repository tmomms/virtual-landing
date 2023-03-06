from django.db import models

# Create your models here.
class MyModel(models.Model):
    name = models.CharField(max_length=20, verbose_name='Имя')
    first_name = models.CharField(max_length=20, verbose_name='Фамилия')

    class Meta:
        verbose_name = 'Модель'
        verbose_name_plural = 'Модели'