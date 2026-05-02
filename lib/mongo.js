import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL;

if (!uri) {
  throw new Error('Add DATABASE_URL to .env.local');
}

const options = {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  maxPoolSize: 10, // Maintain up to 10 socket connections
  retryWrites: true,
  w: 'majority'
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    console.log("Creating new MongoDB connection...");
    
    global._mongoClientPromise = client.connect()
      .then((client) => {
        console.log("Connected to MongoDB successfully");
        return client;
      })
      .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        // Reset the global promise so next request can try again
        global._mongoClientPromise = null;
        throw error;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;