import os
from typing import Dict, Set

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
        self, id: int, slug: str, title: str, difficulty: str, solutions: Set[str]
    ):
        self.id: int = id
        self.slug: str = slug
        self.title: str = title
        self.difficulty: str = difficulty
        self.solutions: Set[str] = solutions

    def to_line(self) -> str:
        solution_items = [
            f"[{s}](./problems/{self.id}_{self.slug}/{LANG_FILE[s]})"
            for s in sorted(self.solutions, key=list(LANG_FILE.keys()).index)
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
        solutions = set([a.split("[")[-1] for a in arr[3].split("](") if "[" in a])
        readme_records[slug] = ReadmeRecord(id, slug, title, difficulty, solutions)

solution_records: Dict[int, ReadmeRecord] = {}
for entry in os.walk("../problems"):
    if entry[1] or "_" not in entry[0]:
        continue

    id = int(entry[0].split("/")[-1].split("_")[0])
    slug = entry[0].split("/")[-1].split("_")[1]
    solutions = set([LANG[a.split(".")[-1]] for a in entry[2]])
    solution_records[int(id)] = ReadmeRecord(id, slug, "", "", solutions)

for id in sorted(solution_records):
    solution_record = solution_records[id]
    slug = solution_record.slug
    if slug not in readme_records:
        question = None
        try:
            question = query_question(slug)
        except Exception as e:
            pass  # may occurred by rate limit, just ignore
        if question:
            solution_record.title = question.title
            solution_record.difficulty = question.difficulty
            print(solution_record.to_line())
    elif len(solution_record.solutions) > len(readme_records[slug].solutions):
        readme_records[slug].solutions = solution_record.solutions
        print(readme_records[slug].to_line())
    else:
        print(readme_records[slug].to_line())
