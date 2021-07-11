from rest_framework import serializers
from .models import Item, Category, ItemImage, Reviews


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = '__all__'


class Reviews(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'
