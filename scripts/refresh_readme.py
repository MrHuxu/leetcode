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
LANG_FILE: Dict[str, str] = {
    "JavaScript": "index.js",
    "TypeScript": "index.ts",
    "Go": "main.go",
    "Python": "__main__.py",
    "Java": "Solution.java",
    "Rust": "lib.rs",
}


class ReadmeRecord:
    def __init__(
        self, id: int, slug: str, title: str, difficulty: str, solutions: List[str]
    ):
        self.id: int = id
        self.slug: str = slug
        self.title: str = title
        self.difficulty: str = difficulty
        self.solutions: List[str] = solutions

    def id_str(self) -> str:
        tmp = str(self.id)
        print(tmp, self.id)
        return "0" * (4 - len(tmp)) + tmp

    def to_line(self) -> str:
        solution_items = [
            f"[{s}](./problems/{self.id_str()}_{self.slug}/{LANG_FILE[s]})"
            for s in self.solutions
        ]
        return f"| [{self.id}](https://leetcode.com/problems/{slug}) | {self.title} | {self.difficulty} | {' '.join(solution_items)} |"


readme_records: Dict[str, ReadmeRecord] = {}
with open("../README.md", "r") as file:
    for line in file.readlines():
        if not line.startswith("| ["):
            continue

        arr = line.split(" | ")
        id = int(arr[0].split("]")[0].split("[")[-1])
        slug = arr[0].split("/")[-1][:-1]
        title = arr[1]
        difficulty = arr[2]
        solutions = [a.split("[")[-1] for a in arr[3].split("](") if "[" in a]
        readme_records[slug] = ReadmeRecord(id, slug, title, difficulty, solutions)

solution_records: Dict[str, ReadmeRecord] = {}
for entry in os.walk("../problems"):
    if entry[1] or "_" not in entry[0]:
        continue

    id = int(entry[0].split("/")[-1].split("_")[0])
    slug = entry[0].split("/")[-1].split("_")[1]
    solutions = [LANG[a.split(".")[-1]] for a in entry[2]]
    solution_records[slug] = ReadmeRecord(id, slug, "", "", solutions)

for slug, record in solution_records.items():
    if slug not in readme_records:
        print("need to create record: ", record.id, slug)
    elif len(record.solutions) > len(readme_records[slug].solutions):
        print("need to add solution: ", record.id, slug)
