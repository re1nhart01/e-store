from django.shortcuts import render
from rest_framework import generics
from django.shortcuts import get_object_or_404

from .models import Item
from .serializers import ItemSerializer


class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetailView(generics.RetrieveAPIView):
    queryset = get_object_or_404(Item)
    serializer_class = ItemSerializer
