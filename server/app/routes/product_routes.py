from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from app import db
from app.models import Product, Description, SaltContent, Review

bp = Blueprint('product_routes', __name__)

# ---------------------------
# GET /products
# ---------------------------
@bp.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'category': p.category,
        'generic_name': p.generic_name,
        'average_price': p.average_price,
        'price': p.price,
        'chemical_formation': p.chemical_formation,
        'description': {
            'text': p.description.text if p.description else '',
            'about': p.description.about if p.description else '',
            'usage_info': p.description.usage_info if p.description else '',
            'how_it_works': p.description.how_it_works if p.description else '',
            'side_effects': p.description.side_effects if p.description else '',
        },
        'salt_content': p.salt_content.value if p.salt_content else None,
        'reviews': [{
            'content': r.content,
            'star': r.star,
            'summary': r.review_summary
        } for r in p.reviews]
    } for p in products])

# ---------------------------
# POST /products
# ---------------------------
@bp.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    data = request.get_json()

    try:
        name = data.get('name')
        description_text = data.get('description')
        salt_value = data.get('salt_content')

        if not name or description_text is None or salt_value is None:
            return jsonify({'code':400,'message': 'Missing or invalid required fields'}), 400

        if Product.query.filter_by(name=name).first():
            return jsonify({'code':409,'message': 'Product name already exists'}), 409

        product = Product(
            name=name,
            category=data.get('category'),
            generic_name=data.get('generic_name'),
            average_price=data.get('average_price'),
            price=data.get('price'),
            chemical_formation=data.get('chemical_formation')
        )
        db.session.add(product)
        db.session.flush()

        description = Description(
            text=description_text,
            about=data.get('about'),
            usage_info=data.get('usage_info'),
            how_it_works=data.get('how_it_works'),
            side_effects=data.get('side_effects'),
            product_id=product.id
        )
        db.session.add(description)

        salt = SaltContent(value=salt_value, product_id=product.id)
        db.session.add(salt)

        for review_data in data.get('reviews', []):
            review = Review(
                content=review_data.get('content'),
                star=review_data.get('star'),
                review_summary=review_data.get('summary'),
                product_id=product.id
            )
            db.session.add(review)

        db.session.commit()
        return jsonify({'message': 'Product created successfully'}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

