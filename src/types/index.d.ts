export interface MyKRUokaProducts {
  productId: string;
  productName: string;
  customProductName: string;
  urlSlug: string;
}

export interface ShoppingList {
  isFullFilled: boolean;
  createdAt: string;
  id: string;
  items: MyKRUokaProducts[];
}
