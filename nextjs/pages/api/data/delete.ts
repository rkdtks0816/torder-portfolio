import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { dbName, collectionName, id } = req.body;

    if (!dbName || !collectionName || !id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      const result = await db
        .collection(collectionName)
        .deleteOne({ _id: new ObjectId(id) });

      res.status(200).json({ message: "Data deleted", result });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
