'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

// 商品詳細頁(SearchParams搜尋參數)
// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${id}
// 詳細頁搜尋參數: ?productCode=u0000000050800
export default function DetailPage() {
  // 得到網址上的productCode (相當於api路由需要的動態參數id)
  const sp = useSearchParams()
  const productCode = sp.get('productCode')
  // console.log(productCode)

  // 接收從伺服器來的物件狀態
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 與伺服器fetch資料的函式
  const getProductById = async (id) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${id}`

    const res = await fetch(url)
    const resData = await res.json()
    console.log(resData)
    // 設定到狀態中
    setProduct(resData)
  }

  // 樣式2: 第一次渲染"之後"，與伺服器fetch獲取資料
  useEffect(() => {
    // 呼叫fetch用函式
    getProductById(productCode)
  }, [])

  // 判斷是用預設狀態渲染時(第一次渲染)，不要呈現預設資料
  if (!product.id) {
    return <>載入中…</>
  }

  return (
    <>
      <h1>商品詳細頁(SearchParams)</h1>
      <hr />
      <h2>{product.name}</h2>
      <p>價格: {product.price}</p>
      <p>標籤: {product.tags}</p>
    </>
  )
}