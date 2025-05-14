
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Site do Senac - APP 02</h1>")

def franquia(request):
    return HttpResponse("<h1>Site da Franquia - APP 02</h1>")

def faleconosco(request):
    return HttpResponse("<h1>Site da Fale conosco - APP 02</h1>")