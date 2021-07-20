from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import ItemsView, item_detail_view, CategoriesView, wishlist_view, add_to_cart

urlpatterns = [
    path('user/', include("users.urls")),
    path('items/', ItemsView.as_view()),
    path('item/<slug>/add-to-cart', add_to_cart),
    path('item/<slug>/wishlist', wishlist_view),
    path('item/<slug>', item_detail_view),
    path('categories',  CategoriesView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]