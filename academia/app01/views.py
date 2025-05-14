from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Site da Academia - APP 01</h1>")

def franquia(request):
    return HttpResponse("<h1>Site da Franquia - APP 01</h1>")

def faleconosco(request):
    return HttpResponse("<h1>Site da Fale conosco - APP 01</h1>")