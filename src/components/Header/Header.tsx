import { FC } from 'react'

import { HeaderEl, HeaderNav, HeaderList, HeaderItem, HeaderItemLink } from './Header.styled'
import { Container } from '../../accets/styled/Reused.styled'

import { navItems, NavItemsType } from '../../utils/constants/navItems.constants'

export const Header: FC = () => {

  return (
    <HeaderEl>
      <Container>
        <HeaderNav>
          <HeaderList>
            {navItems.map(({ path, name }: NavItemsType): JSX.Element => 
              <HeaderItem key={path}>
                <HeaderItemLink to={path}>{name}</HeaderItemLink>
              </HeaderItem> 
            )}
          </HeaderList>
        </HeaderNav>
      </Container>
    </HeaderEl>
  )
}
