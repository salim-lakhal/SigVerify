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
    const db = client.db("test"); // Replace with your database name
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ userId });

    if (!existingUser) {
      const user = {
        userId,
        createdAt: new Date(),
      };

      await usersCollection.insertOne(user);
    }

    return NextResponse.json({ message: "User checked/created successfully", userId });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
