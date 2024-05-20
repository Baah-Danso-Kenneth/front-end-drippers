import InformativeHeader from '../Headers/InformationHeader'
import Footer from '../Footer'
import { LayoutProps } from '../../types/regular.interface'


function Layout({children}:LayoutProps) {
  return (
    <div>
        <InformativeHeader/>
          {children}
          <Footer/>
    </div>
  )
}

export default Layout