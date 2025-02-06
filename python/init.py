import sqlite3
import sys
import re

try:
    import sqlite3
    conn = sqlite3.connect("parc.db")
    cur = conn.cursor()
    #code ici

    with open('sql_file/init.sql') as f:
        fichier = f.read()
        lines = fichier.split(";")
        for index, line in enumerate(lines):
            line = line.replace("\n", "")
            line = re.sub("\s+", " ", line)
            if (line != ""):
                texte = cur.execute(line)

    with open('sql_file/create.sql') as f:
        fichier = f.read()
        lines = fichier.split(";")
        for index, line in enumerate(lines):
            line = line.replace("\n", "")
            line = re.sub("\s+", " ", line)
            if (line != ""):
                texte = cur.execute(line)
    conn.commit()
    conn.close()

except sqlite3.Error as e:
    print(f"Erreur lors de la connection à la base de données: {e}")
    sys.exit(1)