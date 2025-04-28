'use client'

import { useGet } from '@/hooks/use-get'
import Link from 'next/link'
import CssLoader from './_components/css-loader'

// 使用useSWR 
import useSWR from 'swr'

// 給ser使用的獲取函示
const fetcher = (...args) => fetch(...args).then((res) => res.json())

// 商品列表頁(SearchParams搜尋參數)
// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 詳細頁搜尋參數: ?productCode=u0000000050800
export default function ProductSpUseSWRPage() {
  const url =
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
  // 與伺服器fetch資料的函式
  // loadind v.s. isLoading 
  const { data, error, isLoading } = useGet(url)
  // 確保得到的是陣列狀態
  const products = Array.isArray(data) ? data : []
  // 載入指示動畫
  if (isLoading) {
    return <CssLoader />
  }

  return (
    <>
      <h1>商品列表頁(SearchParams)(useSWR)</h1>
      <hr />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link
                href={`/cs-07-effect/product-sp-use-swr/detail?productCode=${product.id}`}
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