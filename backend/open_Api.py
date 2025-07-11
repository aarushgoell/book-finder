import os
from dotenv import load_dotenv
load_dotenv()
from openai import OpenAI

api_k = os.getenv("API_KEY")

client = OpenAI(api_key= api_k)

def get_book_recommendations(prompt: str)-> str:
    # message = f'''Suggest 5 books based on this input: {prompt}.
    # For each book, include: 
    # 1. Title 
    # 2. A 2-line summary 
    # 3. The genre
    # Send all the books inside a list and each book info should be in json format 
    # '''
    # response = client.chat.completions.create(
    #     model = "gpt-3.5-turbo",
    #     messages= [
    #         {"role" : "system","content": "You are a helpful assistant."},
    #         {"role" : "user", "content": message}
    #     ]
    # )
    # return (response.choices[0].message.content)

    return """[
            {
                "title": "The Name of the Wind",
                "summary": "A magical tale of a gifted boy who becomes a legendary wizard.",
                "genre": "Fantasy"
            },
            {
                "title": "Eragon",
                "summary": "A young farm boy discovers a dragon egg that changes his fate.",
                "genre": "Fantasy"
            },
            {
                "title": "The Hobbit",
                "summary": "Bilbo Baggins goes on a quest to reclaim treasure from a dragon.",
                "genre": "Fantasy"
            },
            {
                "title": "Mistborn",
                "summary": "A girl with magical powers helps rebel against a dark lord.",
                "genre": "Fantasy"
            },
            {
                "title": "Howl’s Moving Castle",
                "summary": "A girl cursed into old age meets a strange wizard in a magical house.",
                "genre": "Fantasy"
            }
            ]
    """
