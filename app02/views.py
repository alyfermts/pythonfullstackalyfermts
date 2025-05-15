from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')
def contatos(request):
    return render(request, 'contatos.html')
def produtos(request):
    return render(request, 'produtos.html')
