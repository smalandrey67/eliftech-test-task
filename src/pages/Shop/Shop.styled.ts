import styled from 'styled-components'

export const ShopEl = styled.section`` 

export const ShopTitleWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const ShopButtonBack = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 40px;
   padding: 0 20px;
   border-radius: var(--br-radius);
   border: 1px solid var(--color-grey);

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

export const ShopTitle = styled.h3`
   font-size: var(--fs-bg);
   font-weight: var(---fw-bold);
   color: var(--color-grey);
   text-align: center;
`

export const  ShopWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
   grid-gap: 1rem;
`