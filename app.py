from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from flask_cors import CORS

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

cors = CORS(app)

# Product Class/Model
class Task(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)
  description = db.Column(db.String(200))
  done = db.Column(db.Boolean)
  # created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  def __init__(self, name, description, done):
    self.name = name
    self.description = description
    self.done = done
    # self.created_at = created_at

# Task Schema
class TaskSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'description', 'done', 'created_at')

# Init schema
task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)

# Create a Task
@app.route('/api/task', methods=['POST'])
def add_task():
  name = request.json['name']
  description = request.json['description']
  done = request.json['done']
  # created_at = datetime.utcnow
  new_task = Task(name, description, done)

  db.session.add(new_task)
  db.session.commit()
  return task_schema.jsonify(new_task)

# Get All Tasks
@app.route('/api/task', methods=['GET'])
def get_tasks():
  all_tasks = Task.query.all()
  result = tasks_schema.dump(all_tasks)
  return jsonify(result)

# Get Single Tasks
@app.route('/api/task/<id>', methods=['GET'])
def get_Task(id):
  task = Task.query.get(id)
  return task_schema.jsonify(task)

# Update a Task
@app.route('/api/task/<id>', methods=['PUT'])
def update_task(id):
  task = Task.query.get(id)

  name = request.json['name']
  description = request.json['description']
  done = request.json['done']

  task.name = name
  task.description = description
  task.done = done

  db.session.commit()

  return task_schema.jsonify(task)

# Delete Product
@app.route('/api/task/<id>', methods=['DELETE'])
def delete_task(id):
  task = Task.query.get(id)
  db.session.delete(task)
  db.session.commit()

  return task_schema.jsonify(task)

# Run Server
if __name__ == '__main__':
  app.run(debug=True)
