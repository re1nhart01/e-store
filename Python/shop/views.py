from rest_framework.response import Response
from rest_framework import generics, decorators, status

from .models import Item, Category
from .serializers import ItemSerializer, CategorySerializer, RegisterUserSerializer


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


@decorators.api_view(['POST'])
def user_registration(request):
    if request.method == 'POST':
        if not request.user.is_authenticated:
            serializer = RegisterUserSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                if user:
                    return Response(status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
