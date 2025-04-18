'use client'

import Link from 'next/link'
// 購物車勾子
import { useCart } from '@/hooks/use-cart'

// 吐司訊息用元件
import { ToastContainer, toast } from 'react-toastify'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
  },
]

export default function ProductPage() {
  const { onAdd } = useCart()

  return (
    <>
      <h1>商品列表</h1>
      <Link href="./cart">購物車</Link>
      <hr />
      <ul>
        {initialProducts.map((product) => {
          return (
            <li key={product.id}>
              {product.name} (NT${product.price})
              <button
                onClick={() => {
                  // 加入購物車狀態(context)
                  onAdd(product)
                  // 吐司訊息: 跳出成功訊息
                  toast.success(`"${product.name}"已成功加入購物車`)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
      {/* 吐司訊息用元件 */}
      <ToastContainer />
    </>
  )
}