#Cada numeração corresponde a um programa diferente para que seja desenvolvido. As atividades seguem abaixo:

#1.Filtre produtos com preço > 1000 usando list comprehension;
produtos = [
    {"nome": "mouser", "preco": 3000},
    {"nome": "teclado", "preco": 1000},
    {"nome": "monitor", "preco": 700}
]

# Filtrar produtos com preço maior que 1000
produtos_caros = [produto for produto in produtos if produto["preco"] > 1000]
print(produtos_caros)

#2.Conte quantos produtos existem por categoria (usar dicionário);
contagem = {}

for produto in produtos:
    categoria = produto["nome"]
    if categoria in contagem:
        contagem[categoria] += 1
    else:
        contagem[categoria] = 1

        print(contagem)

#3.Remova duplicatas de uma lista de pedidos usando set.
pedidos = ["notebook","teclado","notebook","teclado","mouse","monitor"]
pedidos_unicos = list(set(pedidos))
print(pedidos_unicos)

#4.Uma empresa contratou seus serviços para armazenar dados de colaboradores em memória e realizar operações como:
'''
Adicionar novos colaboradores.
Buscar colaborador por ID.
Listar colaboradores com salário acima de X.
'''
#Implemente utilizando funções.


colaboradores = []
def adicionar_colaborador(lista, id, nome, salario):
    colaborador = {
        "id": id,
        "nome": nome,
        "salario": salario
    }
    lista.append(colaborador)

def buscar_por_id(lista, id):
    for colaborador in lista:
        if colaborador["id"] == id:
            return colaborador
    return None 

def listar_acima_de_salario(lista, salario_minimo):
    acima = []
    for colaborador in lista:
        if colaborador["salario"] > salario_minimo:
            acima.append(colaborador)
    return acima

adicionar_colaborador(colaboradores, 1, "Carlos", 3500)
adicionar_colaborador(colaboradores, 2, "Ana", 4200)
adicionar_colaborador(colaboradores, 3, "Bruno", 2900)

resultado = buscar_por_id(colaboradores, 2)
print("Buscar por ID 2:", resultado)

print("Colaboradores com salário acima de R$ 3000:")
acima_3000 = listar_acima_de_salario(colaboradores, 3000)
for c in acima_3000:
    print(c)
#Implemente utilizando funções.

