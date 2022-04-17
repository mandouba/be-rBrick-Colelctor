from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('bears/', views.bears_index, name='index'),
    path('bears/<int:bear_id>/', views.bears_detail, name='detail'),
    path('bears/create/', views.BearCreate.as_view(), name='bears_create'),
    path('bears/<int:pk>/update/', views.BearUpdate.as_view(), name='bears_update'),
    path('bears/<int:pk>/delete/', views.BearDelete.as_view(), name='bears_delete'),
    path('bears/<int:bear_id>/add_quality/', views.add_quality, name='add_quality'),
    path('bears/<int:bear_id>/assoc_color/<int:color_id>/', views.assoc_color, name='assoc_color'),
    path('bears/<int:bear_id>/unassoc_color/<int:color_id>/', views.unassoc_color, name='unassoc_color'),
    path('colors/', views.ColorList.as_view(), name='colors_index'),
    path('colors/<int:pk>/', views.ColorDetail.as_view(), name='colors_detail'),
    path('colors/create/', views.ColorCreate.as_view(), name='colors_create'),
    path('colors/<int:pk>/update/', views.ColorUpdate.as_view(), name='colors_update'),
    path('colors/<int:pk>/delete/', views.ColorDelete.as_view(), name='colors_delete'),
]
