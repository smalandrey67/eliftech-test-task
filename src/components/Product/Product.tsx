import { FC } from 'react'

import { ProductType } from '../../types/goods'

import { ProductEl, ProductBody, ProductImageWrapper, ProductImage, ProductTitle, ProductAddToCart, ProductFooterWrapper } from './Product.styled'

export const Product: FC<ProductType> = ({ image, name }) => {

  return (
    <ProductEl>
      <ProductBody>
        <ProductImageWrapper>
          <ProductImage src={image} alt={name} />
        </ProductImageWrapper>
        <ProductFooterWrapper>
          <ProductTitle>{name}</ProductTitle>
          <ProductAddToCart>Add to Cart</ProductAddToCart> 
        </ProductFooterWrapper>
      </ProductBody>
    </ProductEl>
  )
}
