from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re
from nltk.stem import WordNetLemmatizer
import nltk
from nltk.corpus import stopwords, wordnet
import os


app = Flask(__name__)
CORS(app)  

try:
    stopwords.words('english')
except LookupError:
    nltk.download('stopwords')

try:
    wordnet.synsets('word')
except LookupError:
    nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()


def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'\d+', '', text)  
    text = re.sub(r'[^\w\s]', '', text) 
    tokens = text.split()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]
    return ' '.join(tokens)

model_path = 'spam_detection_model.pkl'
vectorizer_path = 'tfidf_vectorizer.pkl'

if not os.path.exists(model_path):
    raise FileNotFoundError(f"The model file '{model_path}' does not exist.")
if not os.path.exists(vectorizer_path):
    raise FileNotFoundError(f"The vectorizer file '{vectorizer_path}' does not exist.")

with open(model_path, 'rb') as file:
    model = pickle.load(file)

with open(vectorizer_path, 'rb') as file:
    vectorizer = pickle.load(file)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    preprocessed_text = preprocess_text(text)
    text_tfidf = vectorizer.transform([preprocessed_text])
    prediction = model.predict(text_tfidf)[0]
    label_map = {0: 'ham', 1: 'spam'}
    result = label_map[prediction]
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)









































