import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("test"); // Replace with your database name
    const signRequests = db.collection("signRequests");

    // Retrieve all documents where userId matches
    const templates = await signRequests.find({ userId: userId, status: "pending" }).toArray();

    return res.status(200).json({ templates });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
