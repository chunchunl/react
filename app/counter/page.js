'use client'
// 上面一定要加use client。伺服器端元件(RSC)不能使用勾子，只有客戶端元件(RCC)才可以

// 模組系統導入(部份or多重導入)
// useState是React的勾子(Hook)，用來在函式元件中使用狀態
import { useState } from 'react'

// 1. 元件一定要預設導出
// 2. 元件的函式名稱一定要英文開頭大寫(大駝峰命名)
export default function CounterPage() {
  // 宣告一組狀態，陣列解構賦值語法(為了方便命名)
  // [獲得值的變數, 設定值的方法] = useState(初始化值)
  // useState(0)表示初始化狀態為0
  const [total, setTotal] = useState(0)

  // 函式型元件的return相當於類別型元件的render方法
  // <>...</> 只有開頭和結尾的標記是jsx中特有的標記(實際上是一個名為Fragment(片段)的元件)
  return (
    <>
      <h1>React計數器</h1>
      <hr />
      {/* 以下加上花括號是為了要在jsx語法中嵌入js的值或表達式 */}
      <h1>{total}</h1>
      <button
        onClick={() => {
           // onClick是react內部加入的"人造(synthetic)事件"屬性
          // 相當於由react在執行前協助進行addEventListener的動作
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}