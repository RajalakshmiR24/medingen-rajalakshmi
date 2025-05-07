

from app import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),unique=True,nullable=False)
    category = db.Column(db.String(100))
    generic_name = db.Column(db.String(100))
    average_price = db.Column(db.Float)
    price = db.Column(db.Float)
    chemical_formation = db.Column(db.String(255))

    description = db.relationship('Description', backref='product', uselist=False, cascade="all, delete-orphan")
    salt_content = db.relationship('SaltContent', backref='product', uselist=False, cascade="all, delete-orphan")
    reviews = db.relationship('Review', backref='product', cascade="all, delete-orphan")


class Description(db.Model):
    __tablename__ = 'descriptions'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    about = db.Column(db.Text)
    usage_info = db.Column(db.Text)  
    how_it_works = db.Column(db.Text)
    side_effects = db.Column(db.Text)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)


class SaltContent(db.Model):
    __tablename__ = 'salt_contents'

    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.String, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    star = db.Column(db.Integer)
    review_summary = db.Column(db.Text)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
