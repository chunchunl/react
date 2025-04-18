'use client'

import React, { useState, useEffect } from 'react'
// 導入星星評分元件
import StarRating from './_components/star-rating'

export default function StarPage(props) {
  return (
    <>
      <h1>StarRating元件測試頁面</h1>
      <hr />
      <h2>對照組</h2>
      <p>沒有給定任何屬性(套用預設值)</p>
      <StarRating />
      <hr />
      <h2>測試組</h2>
      <StarRating max={8} initValue={5} />
      <StarRating max={3} initValue={1} />
    </>
  )
}