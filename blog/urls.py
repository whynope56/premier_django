from django.urls import path, include
from . import views
#from blog.views import YogaView

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
        path('unknown/dategame/', views.dategame, name='dategame'),

        path('yoga/vinyasa/', views.yoga_vinyasa, name='yoga_vinyasa'),
        path('yoga/yin/', views.yoga_yin, name='yoga_yin'),
        path('yoga/pre-post-natal/', views.yoga_natal, name='yoga_natal'),
        path('yoga/aerien/', views.yoga_aerien, name='yoga_aerien'),
        path('yoga/planning/', views.yoga_planning, name='yoga_planning'),
        path('yoga/entreprise/', views.yoga_entreprise, name='yoga_entreprise'),
        path('yoga/intentions/', views.yoga_intentions, name='yoga_intentions'),
    ]

