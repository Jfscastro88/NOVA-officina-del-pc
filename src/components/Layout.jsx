import SiteFooter from './SiteFooter'
import ScrollToHash from './ScrollToHash'

export default function Layout({ children }) {
  return (
    <>
      <ScrollToHash />
      {children}
      <SiteFooter />
    </>
  )
}
