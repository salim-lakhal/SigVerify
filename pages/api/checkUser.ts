import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId: authUserId } = getAuth(req);

  if (!authUserId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const userData = req.body;

  if (!userData) {
    return res.status(400).json({ error: 'Missing user data in request body' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("test"); // Replace with your database name
    const usersCollection = db.collection("users");

    // Check if the user already exists in the database
    const existingUser = await usersCollection.findOne({ userId: authUserId });

    if (!existingUser) {
      // User does not exist, create a new document
      const newUser = {
        userId: authUserId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.primaryEmailAddress.emailAddress,
        createdAt: new Date(),
      };

      await usersCollection.insertOne(newUser);
    }

    return res.status(200).json({ message: "User checked/created successfully" });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
