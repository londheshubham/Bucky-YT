# views takes an http request and sends an http response
# from django.template import loader
# from django.http import HttpResponse
# from django.http import Http404
from . models import Album, Song
from django.shortcuts import render, get_object_or_404


# def index(request):
#     all_albums = Album.objects.all()
#     template = loader.get_template('music/index.html')
#     context = {
#         "all_albums": all_albums,
#     }
#     # html = ()
#     # for album in all_albums:
#     #     url = "/music/" + str(album.id) + "/"
#     #     html.append("<a href=" + url + ">" + album.album_title + "</a><br>")
#     #return HttpResponse(html)
#
#     return HttpResponse(template.render(context, request))

# more easier way using
def index(request):

    all_albums = Album.objects.all()
    context = {'all_albums': all_albums, }

    return render(request, 'music/index.html', context)


# def detail(request, album_id):
#     return HttpResponse("<h2>Details for Album Id:" + " " + str(album_id) + "</h2>")

def detail(request, album_id):
    # try:
    #     album = Album.objects.get(pk=album_id)
    # except Album.DoesNotExist:
    #     raise Http404("Album does not exit")
    album = get_object_or_404(Album, pk=album_id)
    return render(request, 'music/detail.html', {'album': album})

def favorite(request, album_id):
    album = get_object_or_404(Album, pk=album_id)
    try:
        selected_song = album.song_set.get(pk=request.POST['song'])

    except(KeyError, Song.DoesNotExist):
        return render(request, 'music/detail.html', {
            'album': album,
            'error_message': "You did no select a valid song"
            })
    else:
        if selected_song.is_favorite:
            selected_song.is_favorite = False
        else:
            selected_song.is_favorite = True
    selected_song.save()
    return render(request, 'music/detail.html', {'album': album})