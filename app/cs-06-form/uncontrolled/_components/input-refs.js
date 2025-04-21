'use client'

import { CloudCog } from 'lucide-react'
import { useRef } from 'react'

export default function InputRefs() {
  // 1. 宣告ref
  // 執行後會得到 inputRef = {current: null}
  const inputRef = useRef(null)

  return (
    <>
      <h2>文字輸入框(Input Refs)</h2>
      {/* 2. 在要使用的元素上設定ref屬性 */}
      <input type="text" ref={inputRef} />

      <button
        onClick={() => {
          // 3. 當要使用時，直接從ref.current獲得值
          // querySelector(id) 只能用在表單元素
          const v = inputRef.current.value
          console.log(v)
          alert(v)
        }}
      >
        獲得值
      </button>

      <button
        onClick={() => {
          // 3. 當要使用時，直接從ref.current獲得值
          // querySelector(id) 只能用在表單元素
          inputRef.current.value = 'Chun'
        }}
      >
        設定值
      </button>

      <button
        onClick={() => {
          // 只有表單元素可以呼叫 focus()
          inputRef.current.focus()
        }}
      >
        聚焦值
      </button>

      <button
        onClick={() => {
          // 只有表單元素可以呼叫 blur()
          inputRef.current.blur()
        }}
      >
        失焦值
      </button>
    </>
  )
}
