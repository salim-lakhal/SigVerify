import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { templateName, imageName } = await request.json();

  if (!templateName || !imageName) {
    return NextResponse.json({ error: 'Missing required fields in request body' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME || "sigverify");
    const templatesCollection = db.collection('templates');

    const existingTemplate = await templatesCollection.findOne({ userId, templateName });

    if (existingTemplate) {
      return NextResponse.json({ error: 'Template with this name already exists' }, { status: 409 });
    }

    const newTemplate = {
      userId,
      templateName,
      imageName,
      createdAt: new Date()
    };

    await templatesCollection.insertOne(newTemplate);

    return NextResponse.json({ message: 'Template created successfully' });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
