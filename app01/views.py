from django.shortcuts import render
from django.http import HttpResponse
from django.db import models
from .models import Produto


def home(request):
    return render(request, 'app01/home.html')
def contatos(request):
    return render(request, 'app01/contatos.html')
def produtos(request):
    produtos = Produto.objects.all()
    return render(request, 'app01/produtos.html', {'produtos': produtos})
def base(request):
    return render(request, 'app01/base.html')
