import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
   min-height: 60px;
   background-color: var(--color-grey);
   padding: 20px 0;
`

export const HeaderNav = styled.nav`
   display: flex;
   justify-content: flex-end;
` 

export const HeaderList = styled.ul`
   display: flex;
   align-items: center;
`

export const HeaderItem = styled.li`
   &:not(:last-child) {
      margin-right: 15px;
   }
`

export const HeaderItemLink = styled(Link)`
   color: var(--color-white);
   font-size: var(--fs-md);
   font-weight: var(--fw-semiBold);

   &:active {
      opacity: 0.7;
   }

   @media (hover: hover) {
        transition: opacity 0.3s ease;
        &:hover{
            opacity: 0.7;
        }
    }
`

