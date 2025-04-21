'use client'

import { useState } from 'react'

export default function MySelect() {
  const [food, setFood] = useState('皮克敏')

  // 物件陣列 map
  const options = ['牛肉麵', '漢堡', '皮克敏']
  return (
    <>
      <h2>下拉選單(MySelect)</h2>

      <select
        value={food}
        onChange={(e) => {
          setFood(e.target.value)
        }}
      >
        <option value="">請選擇餐點</option>
        {options.map((v, i) => {
          return <option key={i}>{v}</option>
        })}
      </select>
    </>
  )
}
