import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { dbName, collectionName, data } = req.body;

    if (!dbName || !collectionName || !data) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      const result = await db.collection(collectionName).insertOne(data);

      res.status(201).json({ message: "Data inserted", result });
    } catch (error) {
      res.status(500).json({ message: "Failed to insert data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
