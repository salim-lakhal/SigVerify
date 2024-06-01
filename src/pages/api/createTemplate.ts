import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { templateName, imageName } = req.body;

  if (!templateName || !imageName) {
    return res.status(400).json({ error: 'Missing required fields in request body' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("test");
    const templatesCollection = db.collection("templates");

    // Check if the template already exists
    const existingTemplate = await templatesCollection.findOne({ userId: userId, templateName: templateName });

    if (existingTemplate) {
      return res.status(409).json({ error: 'Template with this name already exists' });
    }

    // Create a new template
    const newTemplate = {
      userId,
      templateName,
      imageName,
      createdAt: new Date(),
    };

    await templatesCollection.insertOne(newTemplate);

    return res.status(200).json({ message: "Template created successfully" });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
