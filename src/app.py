from pymongo import MongoClient
import json, time
# Establishing a Connection
client = MongoClient('mongodb://root:password@127.0.0.1:2717')

# Accessing Databases
db = client.pymongo_test

# Inserting Documents
data = db.data

with open('generated.json') as f:
    file_data = json.load(f)

data.insert_many(file_data)


