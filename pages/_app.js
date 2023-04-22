import { Fragment } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import AppBarComp from '../components/AppBar/AppBar';
import SideBar from '../components/Accounts/SideBar';
export default function App({ Component, pageProps,router }) {
  const pages = ['/get-started', '/register','/dashboard', '/activities', '/details', '/cards']
  const showAppBar = router.pathname.startsWith(pages[2]) || router.pathname.startsWith(pages[3]) || router.pathname.startsWith(pages[4]) || router.pathname.startsWith(pages[5])
  const showSideBar = router.pathname.startsWith(pages[4] ) || router.pathname.startsWith(pages[5])
  return(
    <Fragment>
    <div className={`${showAppBar && 'flex'}`}>
      {showAppBar && <AppBarComp/>}
      {showSideBar && <SideBar/>}
    <Component {...pageProps} />
    </div>
    </Fragment>
    ) 
}
