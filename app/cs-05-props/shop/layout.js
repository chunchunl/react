import Menubar from './_components/menubar'

export default function ShopLayout({ children }) {
  return (
    <>
      <Menubar />
      {children}
    </>
  )
}