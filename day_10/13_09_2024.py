"""
Dado um dataframe df contendo dados de funcionários com as colunas: nomes,
departamento e salário. Filtre os funcionários do departamento “TI” e calcule 
a sua média salarial. (Python, Pandas e Numpy)

"""

import pandas as pd
import numpy as np

dados = {
    'nomes': ['Miller', 'Juliana', 'Jônatas', 'Estephanie'],
    'departamento': ['TI', 'RH', 'Finanças', 'TI'],
    'salario': [3000, 2400, 2700, 5500]
}

df = pd.DataFrame(dados)
print("\nDados dos funcionários:\n")
print(df)

funcionariosTi = df[df['departamento'] == 'TI']

mediaSalarial = np.mean(funcionariosTi['salario'])

print(f"\nA média salarial do departamento de TI é: {mediaSalarial:.2f}")
