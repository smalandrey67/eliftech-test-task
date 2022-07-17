import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ShopEl, ShopTitle, ShopWrapper, ShopTitleWrapper, ShopButtonBack } from './Shop.styled'
import { Container, ErrorText, LoadingText } from '../../accets/styled/Reused.styled'

import { useGetGoodsQuery } from '../../services/goodsServices'
import { ProductType } from '../../types/goods'

import { Product } from '../../components/Product/Product'

export const Shop: FC = () => {
  const params = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetGoodsQuery(params.id)

  const navigate = useNavigate()

  const buttonBackHandler = () => {
    navigate(-1)
  } 

  return (
    <ShopEl>
      <Container>
        <ShopTitleWrapper>
          <ShopButtonBack onClick={buttonBackHandler}>back</ShopButtonBack>
          <ShopTitle>{data?.shop} Goods</ShopTitle>
        </ShopTitleWrapper>

        <ShopWrapper>
          {isLoading ?
            <LoadingText>loading...</LoadingText>
            :
            data?.goods.map((product: ProductType): JSX.Element => <Product key={product.goodsId} {...product} />)
          }
        </ShopWrapper>

        {error && <ErrorText>Something went wrong</ErrorText>}
      </Container>
    </ShopEl>
  )
}
