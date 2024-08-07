import MongoClient from 'mongodb/lib/mongo_client';

class DBClient {
  constructor() {
    this.db = null;
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    const dbName = process.env.DB_DATABASE || 'files_manager';
    const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    MongoClient.connect(connectionString, (err, client) => {
      if (err) console.log(err);
      this.db = client.db(dbName);
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
