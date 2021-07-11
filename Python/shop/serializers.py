from rest_framework import serializers
from .models import Item, Category, ItemImage, Reviews


class ItemSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField('get_images')

    class Meta:
        model = Item
        fields = ['title', 'rating', 'price', 'quantity', 'discount', 'color', 'category', 'slug', 'images']

    def get_images(self, item):
        images = ItemImage.objects.filter(item=item)
        if any(images):
            return [image.get_absolute_image_url for image in images]


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
