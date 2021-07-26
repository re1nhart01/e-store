from django.urls import path

from shop.views import wishlist_view, get_cart, make_order
from users.views import user_registration_view

urlpatterns = [
    path('register/', user_registration_view, name='register'),
    path('cart/',  get_cart, name='cart'),
    path('order/', make_order, name='order')
]