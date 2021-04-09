import csv
import requests
from bs4 import BeautifulSoup

result_changes = requests.get('https://bulbapedia.bulbagarden.net/wiki/List_of_modified_moves')
src_changes = result_changes.content
soup_changes = BeautifulSoup(src_changes, "html.parser")

pokemoves_changes = soup_changes.find_all('table', {'class': 'roundy', 'style': 'margin:auto; background:#ddf; border:3px solid #ccf'})

#This list starts at gen 2, index 7 is gen 1
pokemoves_changes_list = [[],[],[],[],[],[],[],[]]
pokemoves_changes_list2 = []
change_cols = ['Name', 'Power']

for gen_change in range(0,7):
    current_change_table = pokemoves_changes[gen_change].find('table', {'border': '1'})

    idx = 0
    for change_row in current_change_table.find_all('tr'):
        if idx < 2:
            idx += 1
            continue

        cols = change_row.find_all('td')

        pow_col = 0
        pow_col2 = 0

        if gen_change > 1:
            pow_col = 4
            pow_col2 = 3
        else:
            pow_col = 3
            pow_col2 = 2

        try:
            data = [cols[0].text.strip(), int(cols[pow_col].text.strip())]
        except:
            data = [cols[0].text.strip(), 0]

        try:
            data2 = [cols[0].text.strip(), int(cols[pow_col2].text.strip())]
        except:
            data2 = [cols[0].text.strip(), 0]

        entry = {}
        entry2 = {}

        for i in range(len(data)):
                entry[change_cols[i]] = data[i]
                entry2[change_cols[i]] = data2[i]

        entry['Name'] = entry['Name'].replace('*', '')
        entry2['Name'] = entry2['Name'].replace('*', '')

        if entry['Name'] == 'AncientPower':
            entry['Name'] = 'Ancient Power'
            entry2['Name'] = 'Ancient Power'
        elif entry['Name'] == 'BubbleBeam':
            entry['Name'] = 'Bubble Beam'
            entry2['Name'] = 'Bubble Beam'
        elif entry['Name'] == 'BubbleBeam':
            entry['Name'] = 'DoubleSlap'
            entry2['Name'] = 'DoubleSlap'
        elif entry['Name'] == 'Double Slap':
            entry['Name'] = 'DragonBreath'
            entry2['Name'] = 'DragonBreath'
        elif entry['Name'] == 'DynamicPunch':
            entry['Name'] = 'Dynamic Punch'
            entry2['Name'] = 'Dynamic Punch'
        elif entry['Name'] == 'ExtremeSpeed':
            entry['Name'] = 'Extreme Speed'
            entry2['Name'] = 'Extreme Speed'
        elif entry['Name'] == 'Faint Attack':
            entry['Name'] = 'Feint Attack'
            entry2['Name'] = 'Feint Attack'
        elif entry['Name'] == 'FeatherDance':
            entry['Name'] = 'Feather Dance'
            entry2['Name'] = 'Feather Dance'
        elif entry['Name'] == 'GrassWhistle':
            entry['Name'] = 'Grass Whistle'
            entry2['Name'] = 'Grass Whistle'
        elif entry['Name'] == 'Hi Jump Kick':
            entry['Name'] = 'High Jump Kick'
            entry2['Name'] = 'High Jump Kick'
        elif entry['Name'] == 'PoisonPowder':
            entry['Name'] = 'Poison Powder'
            entry2['Name'] = 'Poison Powder'
        elif entry['Name'] == 'Sand-Attack':
            entry['Name'] = 'Sand Attack'
            entry2['Name'] = 'Sand Attack'
        elif entry['Name'] == 'Selfdestruct':
            entry['Name'] = 'Self-Destruct'
            entry2['Name'] = 'Self-Destruct'
        elif entry['Name'] == 'SmellingSalt':
            entry['Name'] = 'Smelling Salt'
            entry2['Name'] = 'Smelling Salt'
        elif entry['Name'] == 'SmokeScreen':
            entry['Name'] = 'Smokescreen'
            entry2['Name'] = 'Smokescreen'
        elif entry['Name'] == 'Softboiled':
            entry['Name'] = 'Soft-Boiled'
            entry2['Name'] = 'Soft-Boiled'
        elif entry['Name'] == 'SolarBeam':
            entry['Name'] = 'Solar Beam'
            entry2['Name'] = 'Solar Beam'
        elif entry['Name'] == 'SonicBoom':
            entry['Name'] = 'Sonic Boom'
            entry2['Name'] = 'Sonic Boom'
        elif entry['Name'] == 'ThunderPunch':
            entry['Name'] = 'Thunder Punch'
            entry2['Name'] = 'Thunder Punch'
        elif entry['Name'] == 'ThunderShock':
            entry['Name'] = 'Thunder Shock'
            entry2['Name'] = 'Thunder Shock'
        elif entry['Name'] == 'ViceGrip':
            entry['Name'] = 'Vise Grip'
            entry2['Name'] = 'Vise Grip'

        pokemoves_changes_list[gen_change].append(entry)
        pokemoves_changes_list2.append(entry2)

        idx += 1


names_called = []

for mover in pokemoves_changes_list2:
    if mover['Name'] not in names_called:
        #print('pokemoves_changes_list[7].append(' + str(mover) + ')')
        names_called.append(mover['Name'])

#This adds moves to each generation
pokemoves_changes_list[7].append({'Name': 'Dig', 'Power': 100})
pokemoves_changes_list[7].append({'Name': 'Double-Edge', 'Power': 100})
pokemoves_changes_list[7].append({'Name': 'Explosion', 'Power': 170})
pokemoves_changes_list[7].append({'Name': 'Self-Destruct', 'Power': 130})
pokemoves_changes_list[7].append({'Name': 'Wing Attack', 'Power': 35})
pokemoves_changes_list[7].append({'Name': 'Low Kick', 'Power': 50})
pokemoves_changes_list[1].append({'Name': 'Dive', 'Power': 60})
pokemoves_changes_list[7].append({'Name': 'Fly', 'Power': 70})
pokemoves_changes_list[7].append({'Name': 'High Jump Kick', 'Power': 85})
pokemoves_changes_list[7].append({'Name': 'Jump Kick', 'Power': 70})
pokemoves_changes_list[1].append({'Name': 'Leaf Blade', 'Power': 70})
pokemoves_changes_list[0].append({'Name': 'Outrage', 'Power': 90})
pokemoves_changes_list[7].append({'Name': 'Petal Dance', 'Power': 70})
pokemoves_changes_list[0].append({'Name': 'Rock Smash', 'Power': 20})
pokemoves_changes_list[1].append({'Name': 'Spit Up', 'Power': 0})
pokemoves_changes_list[0].append({'Name': 'Zap Cannon', 'Power': 100})
pokemoves_changes_list[0].append({'Name': 'Beat Up', 'Power': 10})
pokemoves_changes_list[1].append({'Name': 'Bullet Seed', 'Power': 10})
pokemoves_changes_list[1].append({'Name': 'Covet', 'Power': 40})
pokemoves_changes_list[1].append({'Name': 'Doom Desire', 'Power': 120})
pokemoves_changes_list[2].append({'Name': 'Drain Punch', 'Power': 60})
pokemoves_changes_list[2].append({'Name': 'Feint', 'Power': 50})
pokemoves_changes_list[7].append({'Name': 'Fire Spin', 'Power': 15})
pokemoves_changes_list[0].append({'Name': 'Fury Cutter', 'Power': 10})
pokemoves_changes_list[0].append({'Name': 'Future Sight', 'Power': 80})
pokemoves_changes_list[0].append({'Name': 'Giga Drain', 'Power': 60})
pokemoves_changes_list[1].append({'Name': 'Icicle Spear', 'Power': 10})
pokemoves_changes_list[2].append({'Name': 'Last Resort', 'Power': 130})
pokemoves_changes_list[1].append({'Name': 'Sand Tomb', 'Power': 15})
pokemoves_changes_list[7].append({'Name': 'Tackle', 'Power': 35})
pokemoves_changes_list[7].append({'Name': 'Thrash', 'Power': 90})
pokemoves_changes_list[1].append({'Name': 'Uproar', 'Power': 50})
pokemoves_changes_list[0].append({'Name': 'Whirlpool', 'Power': 15})
pokemoves_changes_list[1].append({'Name': 'Air Cutter', 'Power': 55})
pokemoves_changes_list[2].append({'Name': 'Assurance', 'Power': 50})
pokemoves_changes_list[2].append({'Name': 'Aura Sphere', 'Power': 90})
pokemoves_changes_list[7].append({'Name': 'Blizzard', 'Power': 120})
pokemoves_changes_list[7].append({'Name': 'Bubble', 'Power': 20})
pokemoves_changes_list[2].append({'Name': 'Chatter', 'Power': 60})
pokemoves_changes_list[7].append({'Name': 'Crabhammer', 'Power': 90})
pokemoves_changes_list[2].append({'Name': 'Draco Meteor', 'Power': 140})
pokemoves_changes_list[2].append({'Name': 'Dragon Pulse', 'Power': 90})
pokemoves_changes_list[2].append({'Name': 'Energy Ball', 'Power': 80})
pokemoves_changes_list[7].append({'Name': 'Fire Blast', 'Power': 120})
pokemoves_changes_list[3].append({'Name': 'Fire Pledge', 'Power': 50})
pokemoves_changes_list[7].append({'Name': 'Flamethrower', 'Power': 95})
pokemoves_changes_list[3].append({'Name': 'Frost Breath', 'Power': 40})
pokemoves_changes_list[3].append({'Name': 'Grass Pledge', 'Power': 50})
pokemoves_changes_list[1].append({'Name': 'Heat Wave', 'Power': 100})
pokemoves_changes_list[3].append({'Name': 'Hex', 'Power': 50})
pokemoves_changes_list[0].append({'Name': 'Hidden Power', 'Power': 0})
pokemoves_changes_list[3].append({'Name': 'Hurricane', 'Power': 120})
pokemoves_changes_list[7].append({'Name': 'Hydro Pump', 'Power': 120})
pokemoves_changes_list[7].append({'Name': 'Ice Beam', 'Power': 95})
pokemoves_changes_list[3].append({'Name': 'Incinerate', 'Power': 30})
pokemoves_changes_list[1].append({'Name': 'Knock Off', 'Power': 20})
pokemoves_changes_list[2].append({'Name': 'Leaf Storm', 'Power': 140})
pokemoves_changes_list[7].append({'Name': 'Lick', 'Power': 20})
pokemoves_changes_list[3].append({'Name': 'Low Sweep', 'Power': 60})
pokemoves_changes_list[2].append({'Name': 'Magma Storm', 'Power': 120})
pokemoves_changes_list[1].append({'Name': 'Meteor Mash', 'Power': 100})
pokemoves_changes_list[1].append({'Name': 'Muddy Water', 'Power': 95})
pokemoves_changes_list[1].append({'Name': 'Overheat', 'Power': 140})
pokemoves_changes_list[7].append({'Name': 'Pin Missile', 'Power': 14})
pokemoves_changes_list[2].append({'Name': 'Power Gem', 'Power': 70})
pokemoves_changes_list[1].append({'Name': 'Rock Tomb', 'Power': 50})
pokemoves_changes_list[7].append({'Name': 'Skull Bash', 'Power': 100})
pokemoves_changes_list[1].append({'Name': 'Smelling Salts', 'Power': 60})
pokemoves_changes_list[7].append({'Name': 'Smog', 'Power': 20})
pokemoves_changes_list[0].append({'Name': 'Snore', 'Power': 40})
pokemoves_changes_list[3].append({'Name': 'Storm Throw', 'Power': 40})
pokemoves_changes_list[3].append({'Name': 'Struggle Bug', 'Power': 30})
pokemoves_changes_list[7].append({'Name': 'Surf', 'Power': 95})
pokemoves_changes_list[3].append({'Name': 'Synchronoise', 'Power': 70})
pokemoves_changes_list[3].append({'Name': 'Techno Blast', 'Power': 85})
pokemoves_changes_list[0].append({'Name': 'Thief', 'Power': 40})
pokemoves_changes_list[7].append({'Name': 'Thunder', 'Power': 120})
pokemoves_changes_list[7].append({'Name': 'Thunderbolt', 'Power': 95})
pokemoves_changes_list[7].append({'Name': 'Vine Whip', 'Power': 35})
pokemoves_changes_list[2].append({'Name': 'Wake-Up Slap', 'Power': 60})
pokemoves_changes_list[3].append({'Name': 'Water Pledge', 'Power': 50})
pokemoves_changes_list[4].append({'Name': 'Fell Stinger', 'Power': 30})
pokemoves_changes_list[4].append({'Name': 'Flying Press', 'Power': 80})
pokemoves_changes_list[7].append({'Name': 'Leech Life', 'Power': 20})
pokemoves_changes_list[4].append({'Name': 'Mystical Fire', 'Power': 65})
pokemoves_changes_list[4].append({'Name': 'Parabolic Charge', 'Power': 50})
pokemoves_changes_list[2].append({'Name': 'Sucker Punch', 'Power': 80})
pokemoves_changes_list[7].append({'Name': 'Absorb', 'Power': 40})
pokemoves_changes_list[7].append({'Name': 'Mega Drain', 'Power': 75})
pokemoves_changes_list[5].append({'Name': 'Multi-Attack', 'Power': 90})
pokemoves_changes_list[0].append({'Name': 'Rapid Spin', 'Power': 20})
pokemoves_changes_list[7].append({'Name': 'Sky Attack', 'Power': 200})
pokemoves_changes_list[7].append({'Name': 'Solar Beam', 'Power': 200})

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

        for i in range(4):
            entry[columns[i]] = data[i]

        pokemoves.append(entry)

    keys = pokemoves[0].keys()

    list_of_list_of_moves = list_of_list_of_moves + pokemoves
    list_of_list_of_moves = sorted(list_of_list_of_moves, key=lambda k: k['Name'])

    if gen > 1:
        for move_changed in pokemoves_changes_list[gen - 2]:
            for current_move in list_of_list_of_moves:
                if current_move['Name'] == move_changed['Name']:
                    current_move['Power'] = move_changed['Power']
                    break
    else:
        for move_changed in pokemoves_changes_list[7]:
            for current_move in list_of_list_of_moves:
                if current_move['Name'] == move_changed['Name']:
                    current_move['Power'] = move_changed['Power']
                    break

    with open("pokemoves_gen_" + str(gen) + ".csv", "w", encoding = "utf-8", newline='') as file:
        writer = csv.DictWriter(file, keys)
        writer.writeheader()
        writer.writerows(list_of_list_of_moves)

    print("hello")