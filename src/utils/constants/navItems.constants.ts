export type NavItemsType = {
   name: string;
   path: string;
}

enum NavItemsName {
   HOME = 'Home',
   BASKET = 'Basket',
}

export const navItems: NavItemsType[] = [
   { name: NavItemsName.HOME, path: '/'},
   { name: NavItemsName.BASKET, path: '/basket'}
]
