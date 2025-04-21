'use client'

import { useState } from 'react'
import { Eye, EyeOff } from "lucide-react"

export default function MyInput() {
  // input-text
  // 1. 定義狀態: 上面就渲染甚麼
  const [text, setText] = useState('Hello Chun')
  const [pass, setPass] = useState('123456')

  // 顯示密碼勾選方塊 布林直
  const [show, setShow] = useState(false)

  // 按鈕
  const [btn, setBtn] = useState('按鈕')

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h2>密碼輸入框</h2>
      <input
        //  用show狀態判斷是要出現文字輸入框類型還是密碼輸入框類型
        type={show ? 'text' : 'password'}
        value={pass}
        onChange={(e) => {
          setPass(e.target.value)
        }}
      />
      {/* <input
        type="checkbox"
        checked={show}
        onChange={(e) => {
          // 設定時用checked值
          //   setShow(e.target.checked)
          //   另一種語法是toggle， 反向布林值(用按鈕或圖示眼精)
          setShow((show) => !show)
        }}
      />
      顯示密碼 */}

      <button
        type="button"
        className=""
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? <EyeOff size={10} /> : <Eye size={10} />}
      </button>
    </>
  )
}
