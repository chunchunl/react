// context套用第3步: 在最外(上)層包裹提供者元件
// 建立P(Providers)到C(Consumer)的階層關係
import Providers from './providers'

export const metadata = {
  title: 'Next上課範例',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}