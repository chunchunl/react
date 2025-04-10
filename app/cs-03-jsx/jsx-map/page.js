'use client'

import React, { useState, useEffect } from 'react'

export default function JsxMapPage(props) {
  const a1 = [1, 4, 9, 16];

  // 陣列的函式呼叫
  // map -> key 是唯一值 //*** 重要 ***//
  const a2 = a1.map( (v,i) => {
    //  {v} 是JS陣列的值
    //  {i} 是JS陣列的索引值
    return <li key={i}>{v * 2}</li>

  });

  return (
    <>
      <h1>Jsx陣列中Map渲染</h1>
      <hr />
      {/* 另外產生一個新的陣列 */}
      <ul>{a2}</ul>
      {/* 因為map是陣列得方法呼叫，所以可以直接寫在jsx的花括號中 */}
      {/* (?.)可選串聯接語法，一種保護作用的語法(ES2020/ES11)新
       是選擇運算子，如果a1是undefined或null，則不會執行map */}
      <ul>
        {a1?.map( (v,i) => {
          return <li key={i}>{v * 2}</li>
        })}
      </ul>
    </>
  )
}
