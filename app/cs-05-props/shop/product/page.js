'use client'

import Link from 'next/link'
// 購物車勾子
import { useCart } from '@/hooks/use-cart'

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
                  onAdd(product)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}