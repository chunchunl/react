'use client'

import { useState, useEffect } from 'react'

export default function ChildB({ setDataForMe = () => {} }) {
  const [cData, setCData] = useState('子女b內部狀態')

  // 錯誤!!不可以直接呼叫，實際上是這是設定狀態的方法，會觸發重新渲染，對react來說具有副作用
  // setDataForMe(cData)

  // 第二種方式: 用useEffect處理副作用
  // 以下樣式是在"初次渲染完成後，送資料給父母元件"
  useEffect(() => {
     setDataForMe(cData)
  }, [])
  //^^^^保持空陣列

  return (
    <>
      <h3>ChildB</h3>
      <button
        onClick={() => {
          // 第一種方式: 在事件處理函式中呼叫設定狀態的函式
          setDataForMe(cData)
        }}
      >
        送資料給子女c
      </button>
    </>
  )
}