'use client'
// 此檔案providers.js是一個客戶端元件
// 集中所有的context provider在這裡導入與包裹children
// 因為layout元件傾向要使用伺服器元件，也會被共享與快取使用，不適合作這事

// 會員認証+授權用
import { AuthProvider } from '@/hooks/use-auth'
// 購物車用
import { CartProvider } from '@/hooks/use-cart'

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
}