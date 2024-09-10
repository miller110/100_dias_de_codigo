"""
Dado um dataframe df contendo dados de vendas, calcule e exiba: media, mediana, 
desvio padrão, máximo e mínimo da coluna numérica “vendas”. (Python, Pandas e Nmupy)

"""
import pandas as pd
import numpy as np

dados = {'vendas': [3000, 4500, 1800, 2500, 1300, 2100, 1900, 4400]}
df = pd.DataFrame(dados)

print(df)

media = df['vendas'].mean()
mediana = df['vendas'].median()
desvio_padrao = np.std(df['vendas'])
maximo = df['vendas'].max()
minimo = df['vendas'].min()

print(f"\nA média das vendas é: {media:.1f}")
print(f"A mediana das vendas é: {mediana}")
print(f"O desvio padrão das vendas é: {desvio_padrao:.1f}")
print(f"O valor máximo das vendas é: {maximo}")
print(f"O valor mínimo das vendas é: {minimo}")

