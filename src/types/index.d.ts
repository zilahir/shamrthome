export interface Price {
  [key: string]: any;
  value: string;
}

export interface MyKRUokaProducts {
  productId: string;
  productName: string;
  customProductName: string;
  urlSlug: string;
  price: Price;
}

export interface ShoppingList {
  isFullFilled: boolean;
  createdAt: string;
  id: string | undefined;
  items: MyKRUokaProducts[];
}
