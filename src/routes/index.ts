import { ComponentType } from 'react'

import { Home } from '../pages/Home/Home'
import { Basket } from '../pages/Basket/Basket'

export type RouteType = {
   path: string;
   Component: ComponentType;
}

enum RoutePath {
   HOME = '/',
   BASKET = '/basket'
}

export const routes: RouteType[] = [
   { path: RoutePath.HOME, Component: Home },
   { path: RoutePath.BASKET, Component: Basket }
]