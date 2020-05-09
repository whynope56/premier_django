from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.views import View
from .models import Post


# Create your views here.

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def home_page(request):
    return render(request, 'blog/home_page.html')

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def choix(request):
    return render(request, 'blog/choix.html')

def naaaaaaaan(request):
    return render(request, 'blog/naaaaaaaan.html')

def bonchoix(request):
    return render(request, 'blog/bonchoix.html')

def dategame(request):
    return render(request, 'blog/dategame.html')

def yoga_vinyasa(request):
    return render(request, 'blog/yoga_vinyasa.html')

def yoga_yin(request):
    return render(request, 'blog/yoga_yin.html')

def yoga_natal(request):
    return render(request, 'blog/yoga_natal.html')

def yoga_aerien(request):
    return render(request, 'blog/yoga_aerien.html')

def yoga_planning(request):
    return render(request, 'blog/yoga_planning.html')

def yoga_entreprise(request):
    return render(request, 'blog/yoga_entreprise.html')

def yoga_intentions(request):
    return render(request, 'blog/yoga_intentions.html')

# class YogaView(View):

#     def get(self, request, *args, **kwargs):
#         return render(request, 'blog/vinyasa.html')