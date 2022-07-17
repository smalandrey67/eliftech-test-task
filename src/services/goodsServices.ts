import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { ShopsType } from '../types/shops'
import { GoodsType } from '../types/goods'

export const goodsApi = createApi({
   reducerPath: 'goodsApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
   endpoints: (builder) => ({
      getShops: builder.query<ShopsType[], void>({
         query: () => ({
            url: '/shops'
         }) 
      }),
      getGoods: builder.query<GoodsType, string | undefined>({
         query: (id) => ({
            url: `/products/${id ?? ''}`
         })
      })
   })
})

export const { useGetShopsQuery, useGetGoodsQuery } = goodsApi