import csv
import requests
from bs4 import BeautifulSoup

result = requests.get("https://pokemondb.net/pokedex/all")

src = result.content

soup = BeautifulSoup(src, "html.parser")

pokedex_raw = soup.find('table', {'id': 'pokedex'})

pokedex_raw = pokedex_raw.find('tbody')

#pokedex_raw.encode('utf-8')

pokedex = []
columns = ['ID No.', 'Name', 'Type 1', 'Type 2', 'Total', 'HP', 'Attack', 'DefenseSp.', 'AtkSp.', 'Def', 'Speed']

#https://stackoverflow.com/questions/23377533/python-beautifulsoup-parsing-table

orig_form_name = None

for row in pokedex_raw.find_all('tr'):
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    data = [ele for ele in cols if ele]
    entry = {}

    types = data[2].split()
    if len(types) == 1:
        types.append('')

    data[2] = types[0]
    data.insert(3, types[1])

    if orig_form_name != None and data[1].count(orig_form_name) > 1:
        data[1] = data[1][len(orig_form_name) + 1:]
    else:
        orig_form_name = data[1]

    for i in range(len(data)):
        entry[columns[i]] = data[i]

    pokedex.append(entry)

keys = pokedex[0].keys()

with open("pokedex.csv", "w", encoding = "utf-8", newline='') as file:
    writer = csv.DictWriter(file, keys)
    writer.writeheader()
    writer.writerows(pokedex)

print("hello")