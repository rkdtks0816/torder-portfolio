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

      // 현재 시간을 'yymmddhhmmss' 형식으로 추가
      const now = new Date();
      const yy = String(now.getFullYear()).slice(2);
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      const currentTime = `${yy}${mm}${dd}${hh}${min}${ss}`;

      // time 필드 추가
      const dataWithTime = { ...data, time: currentTime };

      const result = await db
        .collection(collectionName)
        .insertOne(dataWithTime);

      res.status(201).json({ message: "Data inserted", result });
    } catch (error) {
      res.status(500).json({ message: "Failed to insert data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
