import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routes, RouteType } from './routes'
import { Header } from './components/Header/Header'

export const App: FC = () => {

  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, Component }: RouteType): JSX.Element => 
          <Route key={path} path={path} element={<Component />} />
        )}
      </Routes>
    </>
  )
}