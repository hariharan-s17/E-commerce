from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    stock = models.IntegerField()
    image = models.ImageField(upload_to="products/")
    rating = models.FloatField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    