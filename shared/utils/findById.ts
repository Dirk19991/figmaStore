export default function findById(data: Product[], id: number) {
  return data.filter((elem) => elem.id === id)[0];
}
