'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// 商品列表頁(SearchParams搜尋參數)
// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 詳細頁搜尋參數: ?productCode=u0000000050800
export default function ProductSpPage() {
  // 接收從伺服器來的物件陣列狀態
  const [products, setProducts] = useState([])

  // 與伺服器fetch資料的函式
  const getProducts = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

    const res = await fetch(url)
    const resData = await res.json()
    console.log(resData)
    // 設定到狀態中
    setProducts(resData)
  }

  // 樣式2: 第一次渲染"之後"，與伺服器fetch獲取資料
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁(SearchParams)</h1>
      <hr />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link
                href={`/cs-07-effect/product-sp/detail?productCode=${product.id}`}
              >
                {product.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}