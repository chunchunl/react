'use client'

// import React, { useState, useEffect } from 'react'

export default function CopyPage() {
  // #region 淺拷貝 (淺層shallow) 只能拷貝第一層的資料
  //   const oa = { a: 1 }
  // 淺拷貝 (淺層shallow) 只能拷貝第一層的資料
  //   const ob = { ...oa }

  // 用指定語法，相當於指向到同一物件（類似名稱的概念）
  // 傳址(稱為 參考 參照 引用 by reference)
  // 不是值value，而是記憶體位置
  //   const oc = oa

  //   console.log('oa', oa)
  //   console.log('ob', ob)
  //   console.log('oc===oa', oc === oa)

  //   oa.a = 99

  //   console.log('oa', oa) // 因為oa是傳值，所以不會改變
  //   console.log('ob', ob) // 因為ob是淺拷貝，所以不會改變
  //   console.log('oc', oc) // 因為oc是傳址，所以會跟著改變

  // #endregion

  // #region 深拷貝
  const od = { a: 1, b: { X: 2 } }

  // 淺拷貝(只能拷貝一層)
  const oe = { ...od } 
  const oee = { ...od, b: { ...od.b } } //淺拷貝可巢狀(但不建議)

  // 深拷貝deep(可以拷貝多層，不管幾層)
  // 昂建 效率高 且很久以前就有的語法(但不精確)
  // JSON不能用undifed, function, symbol
  const of = JSON.parse(JSON.stringify(od))
  //  新的內建API(ES2021)
  const og = structuredClone(od)

  od.a = 88
  od.b.X = 888

  console.log('od', od)
  console.log('oe', oe)
  console.log('of', of)
  console.log('og', og)

  // #endregion

  return (
    <>
      <div>Copy Page</div>
    </>
  )
}
