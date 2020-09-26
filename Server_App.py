from flask import  Flask, jsonify, request
import RequestTrain
from flask_cors import CORS



app=Flask(__name__)
CORS(app)

@app.route('/', methods=['GET','OPTIONS'])
def index():
	if (request.method == 'POST'):
		some_json = request.get_json()
		return jsonify({'you sent': some_json}), 201
	else:
		return jsonify({'about': 'Hello World'})

@app.route('/request/<string:s>' , methods=['GET'])
# @crossdomain(origin='*')
def requestroute(s):
	print(s)
	z=RequestTrain.get_trained(s)
	return z

if __name__ == '__main__':
	app.run(debug=True)
