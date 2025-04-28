'use client'

import { useGet } from '@/hooks/use-get'
import Link from 'next/link'
import CssLoader from './_components/css-loader'

// 商品列表頁(SearchParams搜尋參數)
// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 詳細頁搜尋參數: ?productCode=u0000000050800
export default function ProductSpUseGetPage() {
  const url =
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
  // 與伺服器fetch資料的函式
  const { data, error, loading } = useGet(url)
  // 確保得到的是陣列狀態
  const products = Array.isArray(data) ? data : []
  // 載入指示動畫
  if (loading) {
    return <CssLoader />
  }

  return (
    <>
      <h1>商品列表頁(SearchParams)(useGet)</h1>
      <hr />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link
                href={`/cs-07-effect/product-sp-use-get/detail?productCode=${product.id}`}
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