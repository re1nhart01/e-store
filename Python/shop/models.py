from django.db import models

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
    description = models.TextField(verbose_name='Description', max_length=5000, null=True)
    image = models.ImageField(verbose_name='Image', upload_to='categories/')

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class Item(models.Model):
    title = models.CharField(verbose_name='Item_name', max_length=254, null=False, default='DummyItem')
    rating = models.IntegerField(verbose_name='Rating', choices=RATING_CHOICES, null=True)
    price = models.DecimalField(verbose_name='Price', decimal_places=2, max_digits=10)
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

    def __str__(self):
        return self.name


class Reviews(models.Model):
    name = models.CharField(verbose_name='Name', max_length=254)
    rating = models.IntegerField(verbose_name='Rating', choices=RATING_CHOICES, null=False, default=0)
    email = models.EmailField(null=True)
    review = models.TextField(max_length=5000, null=False)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}'s review"
