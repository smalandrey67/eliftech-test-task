import { FC } from 'react'

import { useRedirect } from '../../hooks/useRedirect'
import { ShopsType } from '../../types/shops'

import { ShopEl, ShopName } from './Shop.styled'

export const Shop: FC<ShopsType> = ({ id, shop }) => {
  const { navigateHandler } = useRedirect()

  return (
    <ShopEl onClick={() => navigateHandler('/shop/', id)}>
      <ShopName>
        {shop}
      </ShopName>
    </ShopEl>
  )
}
