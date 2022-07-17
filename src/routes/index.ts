import { ComponentType } from 'react'

import { Home } from '../pages/Home/Home'
import { Basket } from '../pages/Basket/Basket'
import { Shop } from '../pages/Shop/Shop'

export type RouteType = {
   path: string;
   Component: ComponentType;
}

enum RoutePath {
   HOME = '/',
   BASKET = '/basket',
   SHOP = '/shop/:id'
}

export const routes: RouteType[] = [
   { path: RoutePath.HOME, Component: Home },
   { path: RoutePath.BASKET, Component: Basket },
   { path: RoutePath.SHOP, Component: Shop }
]