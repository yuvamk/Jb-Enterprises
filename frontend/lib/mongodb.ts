import { MongoClient, Db, Collection, Document } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    // In development, use a global variable to preserve the connection
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production, create a new client for each request
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

/**
 * Get database instance
 */
export async function getDatabase(): Promise<Db> {
    const client = await clientPromise;
    return client.db('jb_enterprise');
}

/**
 * Get a collection from the database
 */
export async function getCollection<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
    const db = await getDatabase();
    return db.collection<T>(collectionName);
}

/**
 * Test MongoDB connection
 */
export async function testConnection(): Promise<boolean> {
    try {
        const client = await clientPromise;
        await client.db('admin').command({ ping: 1 });
        console.log('✅ MongoDB connected successfully');
        return true;
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        return false;
    }
}

export default clientPromise;
