#Desafio: Escreva um programa que verifica se um número é par ou ímpar

try:
    num = int(input("Por favor, digite um número: "))

    if (num % 2 == 0):
        print(f"O número {num} é par!")
    else:
        print(f"O número {num} é ímpar!")

except ValueError:
    print("Erro: Por favor, digite um número inteiro.")

    

