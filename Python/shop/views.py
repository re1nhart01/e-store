from rest_framework.response import Response
from rest_framework import generics, decorators, status
from django.shortcuts import get_object_or_404

from .models import Item, Category, WishList, Cart
from .serializers import ItemSerializer, CategorySerializer, WishlistSerializer, CartSerializer


# Items, Categories
class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CategoriesView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@decorators.api_view(['GET', 'POST'])
def item_detail_view(request, slug):
    item = Item.objects.get(slug=slug)
    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Wishlist
@decorators.api_view(['GET', 'POST', 'DELETE'])
def wishlist_view(request, slug):
    if request.user.is_authenticated:
        user = request.user
        item = Item.objects.get(slug=slug)

        if request.method == 'POST':
            wishlist_serializer = WishlistSerializer(data={"user": user.pk, "item": item.id})
            if wishlist_serializer.is_valid():
                wishlist_serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            return Response(wishlist_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        if request.method == 'DELETE':
            wishlist = WishList.objects.get(user=user, item=item)
            if wishlist:
                wishlist.delete()
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            wish_dict = {'user': request.user.pk, 'items': []}
            wishlists = WishList.objects.filter(user=request.user)
            for wish in list(wishlists):
                wish_dict['items'].append(wish.item.slug)
            if any(wishlists):
                return Response(data=wish_dict)

    return Response(status=status.HTTP_401_UNAUTHORIZED)


# Cart and Order logic
@decorators.api_view(['POST'])
def add_to_cart(request, slug):
    if request.user.is_authenticated:
        user = request.user
        item = get_object_or_404(Item, slug=slug)
        # need quantity from front
        quantity = request.data['quantity']
        if request.method == 'POST':
            cart_serializer = CartSerializer(data={'user': user.pk, 'item': item.pk, 'quantity': quantity})
            if cart_serializer.is_valid():
                cart_serializer.save()
                return Response(status=status.HTTP_201_CREATED)

            return Response(data=cart_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    return Response(status=status.HTTP_401_UNAUTHORIZED)
