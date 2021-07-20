from django.db import models
from django.contrib.auth.models import User
from Python import settings

COLORS = [
    ('wh', 'White'),
    ('blm', 'Black'),
    ('bl', 'Blue')
]

RATING_CHOICES = [
    (1, 'Bad'),
    (2, 'Nah'),
    (3, 'Norm'),
    (4, 'Good'),
    (5, 'Awesome')
]


class Category(models.Model):
    title = models.CharField(verbose_name='Name', max_length=254, null=False, default='DummyCategory')
    category_url = models.CharField(verbose_name='Category_Url', max_length=255, null=True)
    iconClassList = models.CharField(verbose_name='Icons', max_length=254, null=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class Item(models.Model):
    title = models.CharField(verbose_name='Item_name', max_length=254, null=False, default='DummyItem')
    rating = models.IntegerField(verbose_name='Rating', choices=RATING_CHOICES, null=True)
    price = models.FloatField(verbose_name='Price', null=False)
    quantity = models.PositiveIntegerField(verbose_name='Quantity', default=0)
    discount = models.BooleanField(verbose_name='Discount', default=False)
    color = models.CharField(verbose_name='Colors', choices=COLORS, null=False, max_length=5)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=False)
    slug = models.SlugField(verbose_name='Slug', default='dummy-item')

    class Meta:
        verbose_name_plural = "Items"
        ordering = ['-price']

    def __str__(self):
        return self.title


class ItemImage(models.Model):
    name = models.CharField(max_length=255)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    default = models.BooleanField(default=False)

    @property
    def get_absolute_image_url(self):
        return "{0}{1}".format(settings.MEDIA_URL, self.image.url)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, null=False)
    quantity = models.PositiveIntegerField(default=1)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    cart_items = models.ManyToManyField(Cart)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)


class Reviews(models.Model):
    name = models.CharField(verbose_name='Name', max_length=254)
    rating = models.IntegerField(verbose_name='Rating', choices=RATING_CHOICES, null=False, default=0)
    email = models.EmailField(null=True)
    review = models.TextField(max_length=5000, null=False)
    date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='reviews', default='categories/sad_panda.jpg')

    def __str__(self):
        return f"{self.name}'s review"


class WishList(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, null=True)

    class Meta:
        unique_together = ['user', 'item']
