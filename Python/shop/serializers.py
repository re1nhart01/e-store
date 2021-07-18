from rest_framework import serializers
from .models import Item, Category, ItemImage, Reviews, WishList
from django.contrib.auth.models import User


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


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = ['user', 'item']
