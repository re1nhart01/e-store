from django.urls import path

from shop.views import wishlist_view
from users.views import user_registration_view

urlpatterns = [
    path('register', user_registration_view, name='register'),
]