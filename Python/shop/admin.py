from django.contrib import admin

from shop.models import Item, Reviews, Category, ItemImage, WishList

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(ItemImage)
admin.site.register(Reviews)
admin.site.register(WishList)
