'use client'

import { useSearchParams } from 'next/navigation'
import { useGet } from '@/hooks/use-get'
import CssLoader from '../_components/css-loader'

// 商品詳細頁(SearchParams搜尋參數)
// 範例資料: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${id}
// 詳細頁搜尋參數: ?productCode=u0000000050800
export default function DetailSpUseGetPage() {
  // 得到網址上的productCode (相當於api路由需要的動態參數id)
  const sp = useSearchParams()
  const productCode = sp.get('productCode')
  // console.log(productCode)
  const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`

  // 與伺服器fetch資料的函式
  const { data, error, loading } = useGet(url)
  // 確保得到的是物件狀態有id
  const product =
    data && data?.id
      ? data
      : {
          id: 0,
          picture: '',
          stock: 0,
          name: '',
          price: 0,
          tags: '',
        }

  // 載入指示動畫
  if (loading) {
    return <CssLoader />
  }

  // 無此商品時呈現訊息
  if (!product.id) {
    return (
      <>
        <h1>商品詳細頁(SearchParams)(useGet)</h1>
        <hr />
        <p>商品不存在</p>
      </>
    )
  }

  return (
    <>
      <h1>商品詳細頁(SearchParams)(useGet)</h1>
      <hr />
      <h2>{product.name}</h2>
      <p>價格: {product.price}</p>
      <p>標籤: {product.tags}</p>
    </>
  )
}