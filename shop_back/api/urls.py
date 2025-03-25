from django.urls import path
from .views import get_products, get_product, get_categories, get_category, get_products_by_category

urlpatterns = [
    path('products/', get_products),
    path('products/<int:id>/', get_product),
    path('categories/', get_categories),
    path('categories/<int:id>/', get_category),
    path('categories/<int:id>/products/', get_products_by_category),
]
