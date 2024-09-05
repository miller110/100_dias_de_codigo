#Desafio: Escreva um Programa que recebe dois números do usuário e imprima a soma deles

try:
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    soma = num1 + num2

    print(f"A soma dos dois números é:{soma}")

except ValueError:
    print("Erro: Por favor, digite um número.")
