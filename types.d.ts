interface Product {
  id: number;
  title: string;
  priceUK: number;
  priceUS: number;
  category: 'accessories' | 'clothes';
  imageMain: string;
  imageHover: string;
  background: string;
}

interface AllProducts {
  data: Product[];
}
