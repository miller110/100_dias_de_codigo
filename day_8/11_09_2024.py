#Crie um programa que converte temperatura de Celsius para Fahrenheit.(Python)

try:
    print("------------------------- Temperatura -------------------------")

    tempCelsius = int(input("\nPor favor, digite quantos Graus Celsius está em sua cidade: "))
    print(f"\nA sua  cidade está com uma temperatura de {tempCelsius} ºC.\n")

    print("------------------------- Convertendo Celsius para Fahrenheit -------------------------")

    tempFahrenheit = tempCelsius * 1.8 + 32

    print(f"\nA sua cidade está com uma temperatura de {tempFahrenheit} ºF.")

except ValueError:
    print("Erro: Por favor, digite um valor numérico válido.")





