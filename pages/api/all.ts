import data from './data.json';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getData();
  res.status(200).json({ response });
}

export async function getData() {
  return data;
}

//test
