import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import all from './data.json';
const data = all as Product[];

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ response: Product }>
) {
  const { query } = req.query;
  const response = await getProductData(query as string);
  res.status(200).json({ response });
}

export async function getProductData(product: string): Promise<Product> {
  const formattedName = product.replaceAll('-', ' ');
  const regex = new RegExp(['^', formattedName, '$'].join(''), 'i');

  const client = await clientPromise;
  const db = client.db('figmaStore');
  const response = await db
    .collection('products')
    .find<Product>({ title: regex })
    .toArray();

  let filteredItem =
    data.filter(
      (elem: Product) =>
        elem.title.toLowerCase() === formattedName.toLowerCase()
    )[0] ?? data[0];

  return response[0];
}
