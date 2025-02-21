import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv() # Ensure API key is loaded

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins (modify for security)

# Gemini API endpoint
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"

# Route to get possible dishes
@app.route("/get_recipes", methods=["POST"])  
def get_recipes():
    try:
        data = request.json
        ingredients = data.get("ingredients", "").strip()
        meal_type = data.get("mealType", "").strip()
        description = data.get("description", "").strip()

        if not ingredients:
            return jsonify({"error": "Ingredients are required"}), 400

        prompt = f"Suggest 5 meal dishes that can be made using the following ingredients: {ingredients}. The meal type is {meal_type}. {description}"

        response = requests.post(
            f"{GEMINI_API_URL}?key={GEMINI_API_KEY}",
            json={"contents": [{"parts": [{"text": prompt}]}]},
            headers={"Content-Type": "application/json"}
        )

        if response.status_code == 200:
            dishes = response.json().get("candidates", [])[0]["content"]["parts"][0]["text"].split("\n")
            formatted_dishes = [{"name": dish.strip()} for dish in dishes if dish.strip()]
            return jsonify({"dishes": formatted_dishes})
        else:
            return jsonify({"error": "Failed to fetch dishes", "details": response.json()}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to get cooking steps for a selected dish
@app.route("/get_steps", methods=["POST"])
def get_steps():
    try:
        data = request.json
        dish = data.get("dish", "").strip()

        if not dish:
            return jsonify({"error": "Dish name is required"}), 400

        prompt = f"Provide step-by-step instructions for cooking {dish}."

        response = requests.post(
            f"{GEMINI_API_URL}?key={GEMINI_API_KEY}",
            json={"contents": [{"parts": [{"text": prompt}]}]},
            headers={"Content-Type": "application/json"}
        )

        if response.status_code == 200:
            steps = response.json().get("candidates", [])[0]["content"]["parts"][0]["text"]
            return jsonify({"steps": steps})
        else:
            return jsonify({"error": "Failed to fetch cooking steps", "details": response.json()}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
