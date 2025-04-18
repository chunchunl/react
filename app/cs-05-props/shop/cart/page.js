'use client'

// 使用Link元件取代a標記(連結) 為了保持目前的狀態值(尤其是針對context中的狀態)
import Link from 'next/link'
// 購物車勾子
import { useCart } from '@/hooks/use-cart'
// 導入sweetalert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartPage() {
  const { items, totalAmount, totalQty, onDecrease, onIncrease, onRemove } =
    useCart()

  // 用sweetalert2取代confirm，再加上onRemove(id)
  // 傳入購物車中項目的名稱與id
  const confirmAndRemove = (itemName, itemId) => {
    // 包裝給react元件用的函式
    const MySwal = withReactContent(Swal)
    // SweetAlert2官網範例
    // https://sweetalert2.github.io/
    MySwal.fire({
      title: '你確定要刪除此項目?',
      text: `${itemName} 將會在購物車中被移除`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確認刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        // 進行刪除動作
        onRemove(itemId)
        // 跳出訊息
        MySwal.fire({
          title: '已成功刪除!',
          text: `${itemName} 已被移除`,
          icon: 'success',
        })
      }
    })
  }

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
                  // 用sweetalert2取代confirm
                  confirmAndRemove(item.name, item.id)
                  // if (confirm('你確定要刪除此商品?')) {
                  //   onRemove(item.id)
                  // }
                } else {
                  onDecrease(item.id)
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                // 用sweetalert2取代confirm
                confirmAndRemove(item.name, item.id)
                // if (confirm('你確定要刪除此商品?')) {
                //   onRemove(item.id)
                // }
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