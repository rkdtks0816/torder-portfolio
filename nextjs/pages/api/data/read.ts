import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { dbName, collectionName } = req.query;

    if (!dbName || !collectionName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db(dbName as string);
      const data = await db
        .collection(collectionName as string)
        .find({})
        .toArray();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
