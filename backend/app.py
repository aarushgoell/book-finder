from flask import Flask, request, jsonify
import json 

from flask_cors import CORS
import os

from open_Api import get_book_recommendations

app =  Flask(__name__)

CORS(app)
@app.route("/api/books",methods = ["POST"])
def recommendBooks():

    data = request.get_json()
    prompt = data.get("prompt","")

    response = get_book_recommendations(prompt)

    try: 
        books = json.loads(response)
        return jsonify(books)
    
    except json.JSONDecodeError:
        return jsonify({"error": "Invalid JSON format from LLM"}), 500

if __name__ == "__main__":
       app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)