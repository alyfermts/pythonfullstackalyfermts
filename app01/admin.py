from django.contrib import admin
from .models import Produto
from .models import Contato

admin.site.register(Produto)
admin.site.register(Contato)
