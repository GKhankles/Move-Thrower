import csv
import requests
from bs4 import BeautifulSoup

base_link = 'https://pokemondb.net/move/generation/'

list_of_list_of_moves = []

for gen in range(1, 9):
    result = requests.get(base_link + str(gen))
    src = result.content
    soup = BeautifulSoup(src, "html.parser")
    pokemoves_raw = soup.find('table', {'id': 'moves'})
    pokemoves_raw = pokemoves_raw.find('tbody')
    columns = ['Name', 'Type', 'Category', 'Power', 'Acc', 'PP', 'Effect']
    pokemoves = []

    #https://stackoverflow.com/questions/23377533/python-beautifulsoup-parsing-table

    for row in pokemoves_raw.find_all('tr'):
        cols = row.find_all('td')

        new_cols = []

        for i in range(len(cols)):
            ele = ''

            try:
                if i == 2:
                    ele = cols[i].get('data-sort-value')

                    if ele == '':
                        ele = 'none'
                elif i > 2 and i < 6:
                    ele = int(cols[i].text.strip())
                else:
                    ele = cols[i].text.strip()
            except:
                ele = 0

            new_cols.append(ele)

        data = new_cols
        entry = {}

        for i in range(len(data)):
            entry[columns[i]] = data[i]

        pokemoves.append(entry)

    keys = pokemoves[0].keys()

    list_of_list_of_moves = list_of_list_of_moves + pokemoves
    list_of_list_of_moves = sorted(list_of_list_of_moves, key=lambda k: k['Name'])

    with open("pokemoves_gen_" + str(gen) + ".csv", "w", encoding = "utf-8", newline='') as file:
        writer = csv.DictWriter(file, keys)
        writer.writeheader()
        writer.writerows(list_of_list_of_moves)

    print("hello")