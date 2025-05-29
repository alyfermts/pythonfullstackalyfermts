
from django.contrib import admin
from django.urls import path,include
from app01.views import home, produtos, contatos, base
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('app01.urls')),
    path('', home, name='home'),
    path('produtos/', produtos,name='produtos'),
    path('contatos/', contatos,name='contatos'),
    path('base/',base,name='base'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
