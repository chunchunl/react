'use client'

// import { CloudCog } from 'lucide-react'
// import React, { useState, useEffect } from 'react'

export default function InputId() {
  return (
    <>
      <h2>文字輸入框(Input Id)</h2>
      <input type="text" id="myInput" />
      <button
        onClick={() => {
          const v = document.querySelector('#myInput').value
          console.log(v)
          alert(v)
        }}
      >
        獲得值
      </button>

      <button
        onClick={() => {
          document.querySelector('#myInput').value = 'Chun'
        }}
      >
        設定值
      </button>

      <button
        onClick={() => {
          // 只有表單元素可以呼叫 focus()
          document.querySelector('#myInput').focus()
        }}
      >
        聚焦值
      </button>

      <button
        onClick={() => {
          // 只有表單元素可以呼叫 blur()
          document.querySelector('#myInput').blur()
        }}
      >
        失焦值
      </button>
    </>
  )
}
