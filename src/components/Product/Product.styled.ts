import styled  from 'styled-components'

export const ProductEl = styled.article`
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);
   margin: 10px;
`

export const ProductBody = styled.div`
   padding: 15px;
`

export const ProductImageWrapper = styled.div`
`

export const ProductImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`

export const ProductFooterWrapper = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
`

export const ProductTitle = styled.h4`
   font-size: var(--fs-md);
   font-weight: var(--fw-semiBold);
   color: var(--color-orange);
   margin-bottom: 5px;
`

export const ProductAddToCart =  styled.button`
   height: 40px;
   border-radius: var(--br-radius);
   border: 1px solid var(--color-black);
   padding: 0 15px;
   display: flex;
   align-items: center;
   justify-content: center;

   &:active {
      background-color: var(--color-grey);
      color: var(--color-white);
      border-color: var(--color-grey);
   }

   @media (hover: hover) {
        transition: all 0.3s ease;
        &:hover{
            background-color: var(--color-grey);
            color: var(--color-white);
            border-color: var(--color-grey);
        }
    }
`