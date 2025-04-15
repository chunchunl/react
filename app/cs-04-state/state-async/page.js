'use client'

import { useState, useEffect } from 'react'

export default function AppPage() {
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)

  const [email, setEmail] = useState('')

  const checkEmailWithServer = (email) => {
    console.log(email)
  }

  // 第二種解法: 用useEffect監聽狀態變化後(作狀態更動"之後"連鎖的動作)
  //
  // useEffect(() => {
  //   checkEmailWithServer(email)
  // }, [email])

  return (
    <>
      <h1>狀態異步解說範例</h1>
      <hr />
      Email{' '}
      <input
        type="text"
        value={email}
        onChange={(e) => {
          // 第一種解法: 先計算出下個狀態的值
          const nextEmail = e.target.value
          setEmail(nextEmail)
          checkEmailWithServer(nextEmail)
        }}
      />
      <br />
      伺服器檢查{'可以使用'}
      <hr />
      {/* <div>
        <h1>total={total}</h1>
        <h1>sum=total+100={sum}</h1>
        <button
          onClick={() => {
            // 先算出下一個狀態的變化結果是什麼
            const nextTotal = total + 1
            // 設定給react進行畫面渲染變化
            setTotal(nextTotal)
            // 接下來的程式碼，不要依賴到狀態變化後的結果
            setSum(nextTotal + 100)
          }}
        >
          total+1
        </button>
      </div> */}
    </>
  )
}