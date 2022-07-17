import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routes, RouteType } from './routes'

import { Header } from './components/Header/Header'
import { MainEl } from './accets/styled/Reused.styled'

import { nanoid } from '@reduxjs/toolkit'

export const App: FC = () => {

  // const generate = () => {
  //   return [
  //     { 
  //       id: 'Sxp-G1UiZ6K_ovXIbkXyx',
  //       shop: 'Mcdonalds',
  //       goods: [
  //         { image: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%BC%D1%8C%D0%B5%D1%80.png', name: 'burger with chicken', goodsId: nanoid() },
  //         { image: 'https://producttoday.ru/wp-content/uploads/2020/12/Yhd1cg89ndk-1.jpg', name: 'Big Tasty', goodsId: nanoid() }
  //       ]
  //     },
  //     {
  //       id: 'peBytkGdNUf7rmjn_FNS_',
  //       shop: 'KFC',
  //       goods: [
  //         { image: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4067.jpg', name: 'Twister junior special', goodsId: nanoid() },
  //         { image: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4064.jpg', name: 'Chickenburger', goodsId: nanoid() },
  //         { image: ' https://www.kfc-ukraine.com/admin/files/medium/medium_3833.jpg', name: 'Bucket Fries', goodsId: nanoid() }
  //       ]
  //     },
  //     {
  //       id: 'UFrkGGx6B_lUH29uBtk2q',
  //       shop: "Domino's",
  //       goods: [
  //         {
  //           image: 'https://media.dominos.ua/__sized__/menu/product_osg_image/2019/10/04/%D0%A2%D0%BE%D0%BD%D0%B8_%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-min-thumbnail-2300x2300-70.jpg', name: "Tony's Pepperoni Pizza", goodsId: nanoid() },
  //         { image: 'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/30/%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8E-thumbnail-2300x2300-70.jpg', name: 'Barbecue pizza', goodsId: nanoid() },
  //         { image: 'https://media.dominos.ua/__sized__/menu/product_osg_image/2021/07/27/PizzaGRILLPPR-min-thumbnail-2300x2300-70.jpg', name: 'Pizza Grill Mix', goodsId: nanoid() }
  //       ]
  //     }
  //   ]
  // }

  // console.log(JSON.stringify(generate()))
  return (
    <>
      <Header />
      <MainEl>
        <Routes>
          {routes.map(({ path, Component }: RouteType): JSX.Element =>
            <Route key={path} path={path} element={<Component />} />
          )}
        </Routes>
      </MainEl>
    </>
  )
}