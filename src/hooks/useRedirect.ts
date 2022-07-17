import { NavigateFunction, useNavigate } from 'react-router-dom'

import { UseRedirectType } from '../types/hooks'

export const useRedirect = (): UseRedirectType => {
   const navigate: NavigateFunction = useNavigate()

   const navigateHandler = (query: string, params: string | number = ''): void => {
      navigate(`${query}${params}`)
   }

   return {
      navigateHandler
   }
}