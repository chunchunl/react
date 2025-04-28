'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 詳細頁動態路由參數: /u0000000050800
export default function ProductPmPage() {
  // 接收從伺服器來的物件陣列狀態
  const [products, setProducts] = useState([])
  // 錯誤狀態
  const [error, setError] = useState(null)

  // 與伺服器fetch資料的函式
  const getProducts = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

    try {
      const res = await fetch(url)
      const resData = await res.json()
      console.log(resData)
      // 確認資料類型一定要是陣列才設定到狀態中
      if (Array.isArray(resData)) {
        setProducts(resData)
      }
    } catch (e) {
      console.log(e)
      setError(e)
    }
  }

  // 樣式2: 第一次渲染"之後"，與伺服器fetch獲取資料
  useEffect(() => {
    // 呼叫fetch用函式
    getProducts()
  }, [])

  console.log('渲染-render')
  return (
    <>
      <h1>商品列表頁(Params)</h1>
      <hr />
      <p>{error && error.message}</p>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/cs-07-effect/product-pm/${product.id}`}>
                {product.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}