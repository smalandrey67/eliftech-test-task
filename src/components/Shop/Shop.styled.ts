import styled from 'styled-components'

export const ShopEl = styled.article`
   padding: 10px;
   height: 50px;
   width: 100%;
   border-radius: var(--br-radius);
   border: 1px solid var(--color-grey);
   cursor: pointer;

   display: flex;
   align-items: center;
   justify-content: center;

   &:not(:last-child) {
      margin-bottom: 10px;
   }

   &:active {
      background-color: var(--color-grey);
      color: var(--color-white);
   }

   @media (hover: hover) {
        transition: all 0.3s ease;
        &:hover{
            background-color: var(--color-grey);
            color: var(--color-white);
        }
    }
`

export const ShopName = styled.h4`
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
   text-transform: capitalize;
`

