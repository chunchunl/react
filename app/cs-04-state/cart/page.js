'use client'

import { useState } from 'react'

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

export default function ShoppingCartPage() {
  // 購物車中的項目 與商品的物件屬性會相差一個count屬性(數字類型，代表購買數量)
  const [items, setItems] = useState([])

  // 處理遞增
  const onIncrease = (itemId) => {
    const nextItems = items.map((v) => {
      if (v.id === itemId) {
        // 如果比對出id=itemId的成員，則進行再拷貝物件，並且作修改`count: v.count+1`
        return { ...v, count: v.count + 1 }
      } else {
        // 否則回傳原本物件
        return v
      }
    })

    // 3 設定到狀態
    setItems(nextItems)
  }
  // 處理遞減
  const onDecrease = (itemId) => {
    const nextItems = items.map((v) => {
      if (v.id === itemId) {
        // 如果比對出id=itemId的成員，則進行再拷貝物件，並且作修改`count: v.count-1`
        return { ...v, count: v.count - 1 }
      } else {
        // 否則回傳原本物件
        return v
      }
    })

    // 3 設定到狀態
    setItems(nextItems)
  }
  // 處理刪除
  const onRemove = (itemId) => {
    const nextItems = items.filter((v, i) => {
      // 過濾出id不為itemId的物件資料
      return v.id !== itemId
    })
    // 3
    setItems(nextItems)
  }
  // 處理新增
  const onAdd = (product) => {
    // 判斷要加入的商品物件是否已經在購物車狀態
    const foundIndex = items.findIndex((v) => v.id === product.id)

    if (foundIndex !== -1) {
      // 如果有找到 ===> 遞增購物車狀態商品數量
      onIncrease(product.id)
    } else {
      // 否則 ===> 新增到購物車狀態
      // 擴增一個count屬性， 預設為1
      const newItem = { ...product, count: 1 }
      // 加到購物車狀態最前面
      const nextItems = [newItem, ...items]
      // 設定到狀態
      setItems(nextItems)
    }
  }

  // 官網解答: 商品為0時刪除
  function handleDecreaseClick(itemId) {
    // 一定都會進行遞減，注意此處一定要用let(因為有重覆指定)
    let nextItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          count: item.count - 1,
        }
      } else {
        return item
      }
    })
    // 在設定到狀態前，多作了一次過濾出商品數量大於0的
    nextItems = nextItems.filter((p) => p.count > 0)

    // 如果需要在刪除前有警告使用者的跳出視窗
    // 需要用 商品狀態vs下個商品狀態 成員數量是否一致來判斷
    if (nextItems.length < items.length) {
      // 這裡是在作刪除
      if (confirm('你確定要刪除此商品?')) {
        setItems(nextItems)
      }
    } else {
      // 這裡是在作遞減
      // 設定到狀態
      setItems(nextItems)
    }
  }

  // 用for迴圈計算總數量
  // const calcTotalQty = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].count
  //   }
  //   return total
  // }
  // 用for迴圈計算總金額
  // const calcTotalAmount = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].count * items[i].price
  //   }
  //   return total
  // }

  // 使用陣列的迭代方法reduce(歸納, 累加)
  // 稱為"衍生,派生"狀態(derived state)，意即是狀態的一部份，或是由狀態計算得來的值
  const totalQty = items.reduce((acc, v) => acc + v.count, 0)
  const totalAmount = items.reduce((acc, v) => acc + v.count * v.price, 0)

  return (
    <>
      <h1>商品列表</h1>
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
      <hr />
      <h1>購物車</h1>
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
                  // alert('商品數量至少需要1個!')
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
            {/* <button
              onClick={() => {
                handleDecreaseClick(item.id)
              }}
            >
              –(官網)
            </button> */}
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