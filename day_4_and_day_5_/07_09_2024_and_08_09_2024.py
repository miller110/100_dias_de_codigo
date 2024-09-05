#Desafio: Crie uma calculadora simples que realiza operações de adição, subtração, divisão e multiplicação.

print("--------------------- Calculadora ---------------------")
print("1.Adição\n2.Subtração\n3.Multiplicação\n4.Divisão")
print("-------------------------------------------------------")

try:
    operacoes = int(input("Escolha o número de 1 a 4 para fazer a operação desejada: "))

    num = float(input("Por favor, digite o primeiro número: "))
    num2 = float(input("Por favor, digite o segundo número: "))
    
    if (operacoes == 1):
        print("--------------------- SOMA ---------------------")
        soma = num + num2
        print(f"O resultado da soma de {num} + {num2} é: {soma}")
    elif (operacoes == 2):
        print("--------------------- SUBTRAÇÃO ---------------------")
        subtracao = num - num2
        print(f"O resultado da subtração de {num} - {num2} é: {subtracao}")
    elif (operacoes == 3):
        print("--------------------- MULTIPLICAÇÃO ---------------------")
        multiplicacao = num * num2
        print(f"O resultado da multiplicação de {num} x {num2} é: {multiplicacao}")
    else:
        print("--------------------- DIVISÃO ---------------------")
        divisao = num / num2
        print(f"O resultado da divisão de {num} / {num2} é: {divisao}")

except ValueError:
    print("Erro: Por favor, digite apenas números.")


