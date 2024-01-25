from dataclasses import dataclass
import os
from typing import Dict, List
from leetcode_api import query_question

LANG: Dict[str, str] = {
    "js": "JavaScript",
    "ts": "TypeScript",
    "go": "Go",
    "py": "Python",
    "java": "Java",
    "rs": "Rust",
}


@dataclass
class ReadmeRecord:
    id: str
    slug: str
    title: str
    difficulty: str
    solutions: List[str]


readme_records: Dict[str, ReadmeRecord] = {}
with open("../README.md", "r") as file:
    for line in file.readlines():
        if not line.startswith("| ["):
            continue

        arr = line.split(" | ")
        id = arr[0].split("]")[0].split("[")[-1]
        slug = arr[0].split("/")[-1][:-1]
        title = arr[1]
        difficulty = arr[2]
        solutions = [a.split("[")[-1] for a in arr[3].split("](") if "[" in a]
        readme_records[slug] = ReadmeRecord(id, slug, title, difficulty, solutions)

# print(readme_records)

solution_records: Dict[str, ReadmeRecord] = {}
for entry in os.walk("../problems"):
    if entry[1] or "_" not in entry[0]:
        continue

    id = entry[0].split("/")[-1].split("_")[0]
    slug = entry[0].split("/")[-1].split("_")[1]
    solutions = [LANG[a.split(".")[-1]] for a in entry[2]]
    solution_records[slug] = ReadmeRecord(id, slug, "", "", solutions)

# print(solution_records)

for slug, record in solution_records.items():
    if slug not in readme_records:
        print("need to create record: ", record.id, slug)
    elif len(record.solutions) > len(readme_records[slug].solutions):
        print("need to add solution: ", record.id, slug)
# print(query_question("two_sum"))
