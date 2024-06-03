import { NextResponse, NextRequest } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("test");
    const templatesCollection = db.collection("templates");

    const templates = await templatesCollection.find({ userId }).toArray();

    return NextResponse.json({ templates });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
