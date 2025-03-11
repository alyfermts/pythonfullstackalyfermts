
preço = 150
promoçao = 20
preço_promoçao = preço - promoçao
print (preço_promoçao)

peso = 70
altura = 1.75
imc = peso /( altura **2 )
print ( imc )

idade = 22
tem_experiencia = True 
elegivel_concurso = idade  >= 18 and tem_experiencia
print(" elegivel ao concurso?", elegivel_concurso)

nivel_acesso = int(input("seu nivel de acesso") )
if nivel_acesso == 1:
    print("acesso restrito") 
elif nivel_acesso == 2:
    print("acesso parcial")
elif nivel_acesso == 3:
    print("acesso total")

celsius = int(input(" digite sua temperatura"))
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)

um = int(input("Digite o número para saber se é par ou ímpar: "))

if num % 2 == 0:
    print(f"O número {num} é Par!")
else:
    print(f"O número {num} é Ímpar!")

peso = int(input("Digite o peso do Frete: "))

if peso <= 5:
    frete = 20.00
elif peso > 10:
    frete = 30.00

print(f'O valor do Frete é {frete}')

