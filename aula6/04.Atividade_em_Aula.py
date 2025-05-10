# Atividades Práticas:

# 1. Crie uma classe Conta com:
'''
Atributo _saldo (privado).
Getter saldo que retorna o valor formatado (ex: R$1000.00).
Setter que bloqueia valores negativos.  
'''
class Conta:
    def __init__(self, saldo):
        self._saldo = saldo
        


    @property
    def saldo(self):
        return self._saldo
    

    @saldo.setter
    def saldo(self, valor):
        # if "-0" not in valor:
        #    raise ValueError("Valor Negativo!")
        if valor < 0:
            self._saldo = valor
        else: raise ValueError("O saldo não pode ser negativo")
            
        
        

# Uso:
valor = float(input("Digite o saldo: "))
conta = Conta(valor)
print(f"Saldo da conta: R${conta.saldo:.2f}")




# 2. Classes Abstratas:
'''
Crie uma classe abstrata Animal com método comum a todas as classes-filhas.
Implemente, pelo menos, as classes Cachorro e Gato com 3 métodos para cada uma.
'''

class Animal:
    def __init__(self, nome, raca):
        self.nome = nome
        self.raca = raca

    def brincar(self):
        return  f"{self.nome} está brincando"

    def comer(self):
        if self.raca == "cacchorro":
            return f"{self.raca} esta comendo ração para cães"
        elif self.raca == "gato":
            return f"{self.raca} esta comendo ração para gatos"
        else:
            return f"esta comendo ração"
         
# 3. Padrão de Acesso a Repositórios

# Crie uma classe UsuarioRepository com os seguintes métodos:
'''
- cadastrar(usuario): cadastra um usuário (dicionário com nome e email).
- listar_todos(): retorna uma lista com todos os usuários cadastrados.
- buscar_por_email(email): retorna o usuário correspondente ao email informado.
- remover(email): remove o usuário correspondente ao email informado. 
- atualizar(usuario): atualiza os dados do usuário correspondente ao email informado.
- listar_por_nome(nome): retorna uma lista com todos os usuários que possuem o nome informado.
- listar_por_email(email): retorna uma lista com todos os usuários que possuem o email informado.
- listar_por_nome_e_email(nome, email): retorna uma lista com todos os usuários que possuem o nome e email informados.
'''

# 4. DESAFIO: retorne às atividades 2 e 3 e implemente uma metaclasse dentro de seus respectivos contextos.