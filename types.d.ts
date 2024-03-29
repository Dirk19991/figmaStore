interface ProductInfo {
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  image5?: string;
  description: string;
  subtitle: string;
}

interface Product {
  id: number;
  title: string;
  priceUK: number;
  priceUS: number;
  category: 'accessories' | 'clothes';
  imageMain: string;
  imageHover: string;
  background: string;
  productInfo: ProductInfo;
}

interface AllProducts {
  data: Product[];
}

interface Item {
  id: number;
  quantity: number;
}

interface Prices {
  'UNITED STATES': {
    label: 'priceUS';
    sign: '$';
  };
  'UNITED KINGDOM': {
    label: 'priceUK';
    sign: '£';
  };
}

interface ImageProps {
  isDesktop: boolean;
}
