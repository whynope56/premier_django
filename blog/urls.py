from django.urls import path, include
from . import views

# anniv_patterns = ([
#     path('', views.view_choix, name='view_choix'),
#     path('bonchoix/', views.bonchoix, name='bonchoix'),
#     path('naaaaaaaan/', views.naaaaaaaan, name='naaaaaaaan'),
# ], 'unknown')

urlpatterns = [        
        path('', views.home_page, name='home_page'),
        path('postlist/', views.post_list, name='post_list'),
        path('post/<int:pk>/', views.post_detail, name='post_detail'),
        path('unknown/', views.choix, name='choix'),
        path('unknown/bonchoix/', views.bonchoix, name='bonchoix'),
        path('unknown/naaaaaaaan/', views.naaaaaaaan, name='naaaaaaaan'),
    ]

