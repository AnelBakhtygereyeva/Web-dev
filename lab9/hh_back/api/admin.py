from django.contrib import admin
from .models import Company, Vacancy  # Import your models

admin.site.register(Company)
admin.site.register(Vacancy)