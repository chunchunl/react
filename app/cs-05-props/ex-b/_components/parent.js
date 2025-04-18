'use client'

import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'
import ChildC from './child-c'

export default function Parent() {
  const [pData, setPData] = useState('父母元件內部狀態')

  // 定義一組專門接收子女內部值的狀態
  const [dataForMe, setDataForMe] = useState('')

  return (
    <>
      <h2>Parent(父母)</h2>
      {/* P -> C 屬性作為狀態的延伸(用屬性來傳遞狀態值) */}
      <ChildA pData={pData} />
      {/* C -> P 屬性要傳遞"設定狀態的函式" */}
      {/* <p>從子女b來的資料: {dataForMe}</p> */}
      <ChildB setDataForMe={setDataForMe} />
      {/* C -> C 組合以上兩種方式*/}
      <ChildC dataForMe={dataForMe} />
    </>
  )
}