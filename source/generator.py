import json

result = []

with open("./hsk-csv-source/hsk1.csv", "r", encoding="utf-8") as file:
    lines = file.readlines()

for index, line in enumerate(lines):
    line = line.strip()

    if not line:
        continue

    hanzi, pinyin, meaning = line.split(",", 2)

    result.append({
        "id": f"hsk4_{index + 1:03}",
        "hanzi": hanzi.strip(),
        "pinyin": pinyin.strip(),
        "meaning": meaning.strip()
    })

with open("./hsk-json-generated/hsk1.json", "w", encoding="utf-8") as output:
    json.dump(result, output, ensure_ascii=False, indent=2)

print("done")