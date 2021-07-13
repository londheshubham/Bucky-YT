from django.urls import path
from . import views

app_name = "music"

urlpatterns = [

    path('', views.index, name='index'),
    #/music/71
    path("<int:album_id>/", views.detail, name="detail"),
    #/music/<album_id>/favorite
    path("<int:album_id>/favorite/", views.favorite, name="favorite")
]

#index is the homepage of the section
#giving name is optional