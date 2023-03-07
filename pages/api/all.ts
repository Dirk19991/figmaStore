import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getData();
  res.status(200).json({ response });
}

export async function getData() {
  const client = await clientPromise;
  const db = client.db('figmaStore');

  const response = await db.collection('products').find({}).toArray();
  return response;
}
