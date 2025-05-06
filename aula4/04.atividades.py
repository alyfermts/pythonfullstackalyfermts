with open('arquivos.txt', 'w') as arquivo:
    arquivo.write("Nome: Paulo\nEmail: paulo112@email.com")

with open('usuario.txt' ,'r') as dados:
    conteudo = dados.read()
    print(conteudo)

import os 
if os.path.exists('usuarios.txt'):
    os.remove('usuarios.txt')
    print("Arquivo removido!")
else:
    print("Arquivo não encontrado.")