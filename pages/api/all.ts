import data from './data.json';

export default async function handler(req, res) {
  console.log(req);
  const response = await getData();
  res.status(200).json({ response });
}

export async function getData() {
  return data;
}
