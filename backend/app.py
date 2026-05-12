from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import uuid

app = Flask(__name__)
CORS(app)

def create_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
    )
    ''')

    conn.commit()
    conn.close()

create_table()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        (data['name'], data['email'], data['password'])
    )

    conn.commit()
    conn.close()

    return jsonify({'message': 'Signup Successful'})

@app.route('/login', methods=['POST'])
def login():
    data = request.json

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute(
        'SELECT * FROM users WHERE email=? AND password=?',
        (data['email'], data['password'])
    )

    user = cursor.fetchone()

    conn.close()

    if user:
        return jsonify({
            'token': str(uuid.uuid4()),
            'message': 'Login Successful'
        })

    return jsonify({'message': 'Invalid Credentials'}), 401

@app.route('/products')
def products():
    products = [
        {'id': 1, 'name': 'Sunflower Oil', 'price': 150},
        {'id': 2, 'name': 'Masoor Dal', 'price': 120},
        {'id': 3, 'name': 'Basmati Rice', 'price': 300}
    ]

    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)