import { FC } from 'react'

import { LoadingText, ErrorText } from '../../accets/styled/Reused.styled'
import { ShopsEl, ShopTitle } from './Shops.styled'
import { Shop } from '../Shop/Shop'

import { useGetShopsQuery } from '../../services/goodsServices'
import { ShopsType } from '../../types/shops'

export const Shops: FC = () => {
  const { data: shops, error, isLoading } = useGetShopsQuery()

  return (
    <ShopsEl>
      <ShopTitle>Shops</ShopTitle> 
      {isLoading ?
        <LoadingText>Loading...</LoadingText>
        :
        shops?.map((shop: ShopsType): JSX.Element => <Shop key={shop.id} {...shop} />)
      }
      {error && <ErrorText>Something went wrong</ErrorText>}
    </ShopsEl>
  )
}
