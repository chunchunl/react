'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PatternPage() {
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState({ value: 0 })

  // 樣式1: 沒有第二傳入參數
  // 意義: 每次渲染之後都會執行
  // 用途: 特殊自訂勾子、日誌、除錯
  useEffect(() => {
    // console.log('每次渲染之後都會執行')
  })

  // 樣式2: 第二傳入參數保持空陣列
  // 意義: 第一次渲染之後執行一次，之後渲染不會再執行
  // 相類似生命周期的componentDidMount(已經掛載)
  // 用途: 元件初始化時，與伺服器fetch/ajax獲取資料或連線。自訂事件、與第三方js應用整合(類似虛擬DOM ready事件)
  useEffect(() => {
    // console.log('第一次渲染之後執行一次，之後渲染不會再執行')
  }, [])

  // #region 樣式3
  // 樣式3: 第二傳入參數有相依變數(dependency)
  // 相類似生命周期的componentDidMount(已經掛載)+componentDidUpdate(已經更動)
  // 意義: 第一次渲染之後執行一次，之後當相依變數有更動之後，再執行一次
  // 用途: 狀態異步解決方案之一，狀態連鎖更動…
  useEffect(() => {
    console.log(
      '第一次渲染之後執行一次，之後當相依變數total有更動之後，再執行一次'
    )
  }, [total])
  // ^^^^^^^ 監聽total更動的事件

  useEffect(() => {
    console.log(
      '第一次渲染之後執行一次，之後當相依變數total或count有更動之後，再執行一次'
    )
  }, [total, count])
  // ^^^^^^^ 監聽total或count更動的事件

  useEffect(() => {
    console.log(
      '第一次渲染之後執行一次，之後當相依變數count.value有更動之後，再執行一次'
    )
  }, [count.value])
  // ^^^^^^^ 監聽count.value更動的事件

  // #endregion

  // 樣式4: 第一個傳入參數(函式)的回傳值，本身也是一個函式。稱為"清理cleanup函式"
  // 意義: 在元件卸載unmount之前執行(相當於生命周期componentWillUnmount)
  // 用途: 搭配樣式2或3使用。資源釋放、移除自訂事件、伺服器斷線…。
  useEffect(() => {
    return () => {
      console.log('在元件卸載unmount之前執行')
    }
  }, [])

  return (
    <>
      <h1>useEffect應用4種樣式</h1>
      <Link href="/">連至 首頁</Link>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <hr />
      <h1>{count.value}</h1>
      <button
        onClick={() => {
          setCount({ value: count.value + 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount({ value: 1 })
        }}
      >
        =1
      </button>
    </>
  )
}