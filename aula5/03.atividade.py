# Atividade Prática: Sistema de uma Biblioteca
'''
Contexto:
Você foi contratado para desenvolver um sistema de gerenciamento de biblioteca usando POO em Python.
O sistema deve modelar livros, usuários e empréstimos, com funcionalidades básicas de cadastro, consulta e operações.

Requisitos:
- O sistema deve permitir o cadastro de livros, usuários e empréstimos.
- O sistema deve permitir a consulta de livros cadastrados.
- O sistema deve permitir a consulta de usuários cadastrados.
'''

# DESAFIO (opcional) Classe LivroDigital:
# Herde de Livro e adicione o formato do e-book e formas de download.




# Classe Livro
class Livro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def __str__(self):
        return f"{self.titulo} - {self.autor}"


# Classe LivroDigital (Desafio opcional)
class LivroDigital(Livro):
    def __init__(self, titulo, autor, formato, link_download):
        super().__init__(titulo, autor)
        self.formato = formato
        self.link_download = link_download

    def __str__(self):
        return f"{super().__str__()} [Formato: {self.formato}, Download: {self.link_download}]"


# Classe Usuario
class Usuario:
    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return self.nome


# Classe Emprestimo
class Emprestimo:
    def __init__(self, livro, usuario):
        self.livro = livro
        self.usuario = usuario

    def __str__(self):
        return f"'{self.livro.titulo}' emprestado para {self.usuario.nome}"


# Classe Biblioteca
class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []
        self.emprestimos = []

    def cadastrar_livro(self, titulo, autor):
        livro = Livro(titulo, autor)
        self.livros.append(livro)

    def cadastrar_usuario(self, nome):
        usuario = Usuario(nome)
        self.usuarios.append(usuario)

    def realizar_emprestimo(self, titulo_livro, nome_usuario):
        livro = next((l for l in self.livros if l.titulo == titulo_livro), None)
        usuario = next((u for u in self.usuarios if u.nome == nome_usuario), None)

        if livro and usuario:
            emprestimo = Emprestimo(livro, usuario)
            self.emprestimos.append(emprestimo)
            print(" O empréstimo foi realizado com sucesso!")
        else:
            print(" Livro ou usuário não encontrado!")

    def consultar_livros(self):
        print("\n Livros Cadastrados:")
        for livro in self.livros:
            print(livro)

    def consultar_usuarios(self):
        print("\n Usuários Cadastrados:")
        for usuario in self.usuarios:
            print(usuario)






