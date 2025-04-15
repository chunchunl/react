'use client'

import React, { useState, useEffect } from 'react'

// 把原兼差開在整合頁面

// 導入Parent元件
import Parent from './_componentss/parent'

export default function ExAPage(props) {
  return (
    <>
      <h1>Props屬性範例-a</h1>
      <hr />

      {/* 渲染Parent元件 */}
      <Parent />
      

    </>
  )
}
