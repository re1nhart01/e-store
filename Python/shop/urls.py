from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import ItemsView, item_detail_view, CategoriesView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('items/', ItemsView.as_view()),
    path('item/<slug>', item_detail_view),
    path('categories',  CategoriesView.as_view())
]