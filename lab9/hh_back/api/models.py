from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'company' 
        verbose_name_plural = "Companies" 

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    company = models.ForeignKey(Company, models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'vacancy'
        verbose_name_plural = "Vacancies"
    
    def __str__(self):
        return self.name
