
export type Category = 'All' | 'Men' | 'Women' | 'Accessories' | 'Recycled';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  ecoTag: string;
  materials: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface UserFeedback {
  message: string;
  type: 'success' | 'error' | 'info';
}
