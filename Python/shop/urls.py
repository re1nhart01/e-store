from django.urls import path
from .views import ItemsView, item_detail_view, CategoriesView

urlpatterns = [
    path('items/', ItemsView.as_view()),
    path('item/<slug>', item_detail_view),
    path('categories',  CategoriesView.as_view())
]