'use client'

import React, { useState, useEffect } from 'react'

export default function MyRadioButtons() {
  //  記錄選中的值
  const [pet, setPet] = useState('')
  // 選項按鈕群組
  const options = ['狗', '貓', '鳥']
  return (
    <>
      <h2>選項按鈕群組(MyRadioButtons)</h2>
      <option value="">請選擇寵物</option>
      {options.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              //   每個選項的值(v)與目前的狀態做比較，相符和才會勾選
              checked={v === pet}
              value={v}
              onChange={(e) => {
                setPet(e.target.value)
              }}
            />
            {v}
          </div>
        )
      })}
    </>
  )
}
