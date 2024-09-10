#Escreva um programa que calcula a tabuada de um número.(Python)

try:
    print("------------------------- Tabuada -------------------------")

    num = int(input("Por favor, digite um número para visualizar a tabuada: "))

    print(f"\n------------------------- Tabuada do número {num}: -------------------------")

    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

except ValueError:
    print("Erro: Por favor, digite apenas um número inteiro válido.")

