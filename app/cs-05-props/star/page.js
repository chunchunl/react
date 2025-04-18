'use client'

import React, { useState, useEffect } from 'react'
// 導入星星評分元件
import StarRating from './_components/star-rating'
// react-icons
import { FaStar, FaHeart } from 'react-icons/fa'

export default function StarPage() {
  const [r1, setR1] = useState(4)
  const [r2, setR2] = useState(1)

  return (
    <>
      <h1>StarRating元件測試頁面</h1>
      <hr />
      <h2>對照組</h2>
      <p>沒有給定任何屬性(套用預設值)</p>
      <StarRating />
      <hr />
      <h2>測試組</h2>
      <StarRating
        max={8}
        value={r1}
        onChange={setR1}
        fillColor="red"
        emptyColor="green"
        icon={<FaStar />}
      />
      <p>r1={r1}</p>
      <p>
        <button
          onClick={() => {
            setR1(0)
          }}
        >
          r1重置
        </button>
      </p>
      <StarRating
        max={3}
        value={r2}
        onChange={setR2}
        fillColor="#ff6600"
        emptyColor="pink"
        icon={<FaHeart />}
      />
      <p>r2={r2}</p>
    </>
  )
}