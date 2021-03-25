import csv

pokedex_split = [[], [], [], [], [], [], [], []]

with open('pokedex.csv', "r", encoding = "utf-8", newline='') as file:
    reader = csv.DictReader(file)
    pokedex_read = list(reader)
    keys = pokedex_read[0].keys()

    for line in pokedex_read:
        if int(line['ID No.']) <= 151:
            pokedex_split[0].append(line)
        if int(line['ID No.']) <= 251:
            pokedex_split[1].append(line)
        if int(line['ID No.']) <= 386:
            pokedex_split[2].append(line)
        if int(line['ID No.']) <= 493:
            pokedex_split[3].append(line)
        if int(line['ID No.']) <= 649:
            pokedex_split[4].append(line)
        if int(line['ID No.']) <= 721:
            pokedex_split[5].append(line)
        if int(line['ID No.']) <= 809:
            pokedex_split[6].append(line)
        if int(line['ID No.']) <= 898:
            pokedex_split[7].append(line)

with open("pokedex_gen_1.csv", "w", encoding = "utf-8", newline='') as file1:
    writer = csv.DictWriter(file1, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[0])

with open("pokedex_gen_2.csv", "w", encoding = "utf-8", newline='') as file2:
    writer = csv.DictWriter(file2, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[1])

with open("pokedex_gen_3.csv", "w", encoding = "utf-8", newline='') as file3:
    writer = csv.DictWriter(file3, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[2])

with open("pokedex_gen_4.csv", "w", encoding = "utf-8", newline='') as file4:
    writer = csv.DictWriter(file4, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[3])

with open("pokedex_gen_5.csv", "w", encoding = "utf-8", newline='') as file5:
    writer = csv.DictWriter(file5, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[4])

with open("pokedex_gen_6.csv", "w", encoding = "utf-8", newline='') as file6:
    writer = csv.DictWriter(file6, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[5])

with open("pokedex_gen_7.csv", "w", encoding = "utf-8", newline='') as file7:
    writer = csv.DictWriter(file7, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[6])

with open("pokedex_gen_8.csv", "w", encoding = "utf-8", newline='') as file8:
    writer = csv.DictWriter(file8, keys)
    writer.writeheader()
    writer.writerows(pokedex_split[7])

    
