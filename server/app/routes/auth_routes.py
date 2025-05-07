from flask import Blueprint, request, jsonify
from app.utils.jwt import generate_token

bp = Blueprint('auth_routes', __name__)

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data['username'] == 'admin' and data['password'] == 'admin':
        token = generate_token(identity=data['username'])
        return jsonify(access_token=token), 200
    return jsonify(code='401',msg='Invalid credentials'), 401
