'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function ProductCodePage() {
  // 得到動態路由參數
  const params = useParams()
  console.log(params)
  // productCode指的是資料夾名稱[productCode]
  const productCode = params.productCode

  // 接收從伺服器來的物件狀態
  // 可以用 有初始屬性值物件/空物件/null值 當狀態初始值
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
    const baseUrl =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    const url = `${baseUrl}/${id}`

    // 使用async-await，應當要使用try...catch敘述
    try {
      // 也可以寫成
      // const resData = await fetch(url).then((res) => res.json())
      const res = await fetch(url)
      const resData = await res.json()
      console.log(resData)
      if (resData.id) {
        setProduct(resData)
      }

      // 設定到狀態中
    } catch (e) {
      console.log(e)
    }
  }

  // 樣式2: 第一次渲染"之後"，與伺服器fetch獲取資料一次
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
      <h1>商品詳細頁(Params)</h1>
      <hr />
      <h2>{product.name}</h2>
      <p>價格: {product.price}</p>
      <p>標籤: {product.tags}</p>
    </>
  )
}