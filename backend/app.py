from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db'
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)
    available = db.Column(db.Boolean, nullable=False)

@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_product = Product(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        available=data['available']
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'}), 201

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.order_by(Product.price).all()
    return jsonify([{
        'name': product.name,
        'price': product.price
    } for product in products])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)