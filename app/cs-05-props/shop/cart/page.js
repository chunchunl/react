'use client'

// 使用Link元件取代a標記(連結) 為了保持目前的狀態值(尤其是針對context中的狀態)
import Link from 'next/link'
// 購物車勾子
import { useCart } from '@/hooks/use-cart'

export default function CartPage() {
  const { items, totalAmount, totalQty, onDecrease, onIncrease, onRemove } =
    useCart()

  return (
    <>
      <h1>購物車</h1>
      <Link href="./product">商品列表</Link>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (<b>{item.count}</b>)(NT${item.price})
            <button
              onClick={() => {
                onIncrease(item.id)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (item.count <= 1) {
                  if (confirm('你確定要刪除此商品?')) {
                    onRemove(item.id)
                  }
                } else {
                  onDecrease(item.id)
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                if (confirm('你確定要刪除此商品?')) {
                  onRemove(item.id)
                }
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        總數量: {totalQty}/ 總金額:NT${totalAmount.toLocaleString()}
      </div>
    </>
  )
}