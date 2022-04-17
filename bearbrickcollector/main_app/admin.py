from django.contrib import admin

from .models import Bear, Quality, Color

# Register your models here
admin.site.register(Bear)
admin.site.register(Quality)
admin.site.register(Color)