import requests
from dataclasses import dataclass

url = "https://leetcode.com/graphql"
headers = {"Content-Type": "application/json"}
question_query_template = """
{{
    question(titleSlug: "{}") {{
        questionId
        title
        difficulty
    }}
}}
"""


@dataclass
class Question:
    questionId: str
    title: str
    difficulty: str


def query_question(slug: str) -> Question:
    data = {"query": question_query_template.format(slug)}
    response = requests.post(url, json=data, headers=headers)
    return Question(**response.json()["data"]["question"])
