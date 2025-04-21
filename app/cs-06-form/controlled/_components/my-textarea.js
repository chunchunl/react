'use client'

import { useState } from 'react'

export default function MyTextarea() {
  const [text, setText] = useState('')

  return (
    <>
      <h2>文字輸入框</h2>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <hr />
      <h3>輸入後呈現換行(替換換行符號為p標記)</h3>
      {text.split('\n').map((v, i) => {
        // 直接輸入html 會檔至安全漏洞
        return <p key={i}>{v}</p>
      })}
    </>
  )
}
