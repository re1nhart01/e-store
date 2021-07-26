from rest_framework.response import Response
from rest_framework import generics, decorators, status
from django.shortcuts import get_object_or_404

from .models import Item, Category, WishList, Cart
from .serializers import ItemSerializer, CategorySerializer, WishlistSerializer, CartSerializer, OrderSerializer


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


@decorators.api_view(['GET'])
def get_cart(request):
    if request.user.is_authenticated:
        user = request.user
        carts = Cart.objects.filter(user=user)
        if carts:
            cart_list = []
            for cart in carts:
                cart_list.append({'item': cart.item.title, 'quantity': cart.quantity})
            return Response(data=cart_list, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(status=status.HTTP_401_UNAUTHORIZED)


@decorators.api_view(['POST'])
def make_order(request):
    if request.user.is_authenticated:
        user = request.user
        unpayed_cart = Cart.objects.filter(user=user, ordered=False)
        if unpayed_cart:
            cart = [item.pk for item in unpayed_cart]
            order_serializer = OrderSerializer(data={'user': user.pk, 'cart_items': cart, 'ordered': True})
            if order_serializer.is_valid():
                for item in unpayed_cart:
                    item.ordered = True
                    item.save()
                order_serializer.save()
                return Response(status=status.HTTP_201_CREATED)

            return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_403_FORBIDDEN)