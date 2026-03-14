import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { auth } from '@clerk/nextjs/server';

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME || "sigverify");
    const signRequests = db.collection("signRequests");

    const templates = await signRequests.find({ userId, status: "pending" }).toArray();

    return NextResponse.json({ templates });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
