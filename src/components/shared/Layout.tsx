import InformativeHeader from '../Headers/InformationHeader'
import SearchHeader from '../Headers/Header'
import Footer from '../Footer'
import { LayoutProps } from '../../types/regular.interface'

import { useLocation } from 'react-router-dom'


function Layout({children}:LayoutProps) {
  const location = useLocation()
  const currentPath = location.pathname

  let header

  const informativePaths = /^\/welcome\/drip\/(men|women|kids|others)/;

  if(informativePaths.test(currentPath)){
    header = <SearchHeader/>
  }else{
    header = <InformativeHeader/>
  }
 
  return (
    <div>
        {header}
          {children}
          <Footer/>
    </div>
  )
}

export default Layout