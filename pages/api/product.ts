import { NextApiRequest, NextApiResponse } from 'next';
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

  let filteredItem =
    data.filter(
      (elem: Product) =>
        elem.title.toLowerCase() === formattedName.toLowerCase()
    )[0] ?? data[0];

  return filteredItem;
}
