export type ProductType = {
   image: string;
   name: string;
   goodsId: string;
}

export type GoodsType = {
   id: string;
   goods: ProductType[];
   shop: string;
}



