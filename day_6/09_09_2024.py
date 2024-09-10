#Faça um programa que calcula o fatorial de um número.(Python)

import sys

print("------------------------- Fatorial de Um Número -------------------------")


try:
    num = int(input("Digite um número: "))
    i = num
    fatorial = 1

    if (num < 0):
        print("Erro: Por favor, digite apenas números inteiros positivos.")
        sys.exit()

    while i > 1:
        fatorial *= i
        i -= 1

    print(f"O fatorial do número {num} é: {fatorial}")

except ValueError:
    print("Erro: Por favor, digite apenas números inteiros positivos.")

     
