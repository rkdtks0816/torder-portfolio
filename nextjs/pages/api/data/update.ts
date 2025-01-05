import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { dbName, collectionName, id, updates } = req.body;

    if (!dbName || !collectionName || !id || !updates) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      const result = await db
        .collection(collectionName)
        .updateOne({ _id: new ObjectId(id) }, { $set: updates });

      res.status(200).json({ message: "Data updated", result });
    } catch (error) {
      res.status(500).json({ message: "Failed to update data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
