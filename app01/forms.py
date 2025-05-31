from django import forms
from .models import Produto, UserProfile, Contato

class ProdutoForm(forms.ModelForm):
    '''
    Formulário para criação/edição de produtos
    Valida automaticamente campos baseados no modelo
    '''
    class Meta:
        model = Produto
        fields = ['nome', 'imagem', 'preco', 'disponivel']
        widgets = {
            'nome': forms.TextInput(attrs={'class': 'form-control'}),
            'preco': forms.NumberInput(attrs={'class': 'form-control'}),
        }

class ProfileForm(forms.ModelForm):
    '''
    Formulário para upload de foto de perfil
    '''
    class Meta:
        model = UserProfile
        fields = ['foto', 'bio']
        widgets = {
            'bio': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }


class ContatoForm(forms.ModelForm):
    class Meta:
        model = Contato
        fields = ['nome', 'email', 'mensagem']
        widgets = {
            'nome': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'mensagem': forms.Textarea(attrs={'class': 'form-control', 'rows': 4}),
        }
