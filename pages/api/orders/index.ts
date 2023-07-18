import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from 'shared/libs/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('figmaStore');

    await db.collection('orders').insertOne(JSON.parse(req.body));
    return res.status(200).json({ message: 'Success' });
  } catch (e) {
    console.error(e);
  }
};
