from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.http import JsonResponse

# Create your views here.

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
        vacancies = company.vacancies.all()  # Use related_name from ForeignKey
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

def get_vacancies_by_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = Vacancy.objects.filter(company=company)
        data = [{"id": v.id, "name": v.name, "description": v.description, "salary": v.salary} for v in vacancies]
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
