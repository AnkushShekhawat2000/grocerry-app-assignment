

export interface Product = {
  id: number;
  name: string;
  price: number;
  image: string;

  category: string;        
  filterCategory: string;
  brand: string;          
  isExclusive: boolean;
  isBestSelling: boolean;
};