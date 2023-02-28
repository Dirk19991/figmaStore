interface Product {
  id: number;
  title: string;
  priceUK: number;
  priceUS: number;
  category: 'accessories' | 'clothes';
  imageMain: string;
  imageHover: string;
  background: string;
  productInfo: {
    image1: string;
    image2: string;
    image3?: string;
    image4?: string;
    image5?: string;
    description: string;
    subtitle: string;
  };
}

interface AllProducts {
  data: Product[];
}
