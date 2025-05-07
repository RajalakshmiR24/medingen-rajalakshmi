from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS 
from dotenv import load_dotenv
import os

load_dotenv()

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)
    jwt.init_app(app)
    Migrate(app, db)

    CORS(app)

    from app.routes import auth_routes, product_routes
    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(product_routes.bp)

    return app
