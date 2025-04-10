'use client'

// import React, { useState, useEffect } from 'react'

export default function JsxRenderPage() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <hr />
      <h2>number(數字)</h2>
      {/* 數字運算 */}
      {1 - 1}
      <br />
      {/* 數字運算結果為NaN */}
      {NaN}
      <br />
      {/* 數字運算結果為Infinity */}
      {1 / 0}
      <br />

      <h2>string(字串)</h2>
      {/* 字串渲染呈現 */}
      {'這是字串'}
      <br />
      {/* 字串拼接 */}
      {`這是另一個字串${100 - 1}`}
      <br />

      <h2>boolean(布林值)</h2>
      {/* 不渲染呈現 */}
      {true}
      <br />
      {false}
      <br />

      <h2>null/undefined</h2>
      {/* 不渲染呈現 */}
      {null}
      <br />
      {undefined}
      <br />

      <h2>array(陣列)</h2>
      {/* 陣列渲染呈現 */}
      {/* 類似於 arry.join('') */}
      {[1, 2, 3]}
      <br />
      {['hello', 'a', 'b']}
      <br />
      {/* 需要加key 不然會報錯 */}
      {[
        <p key="1">1</p>,
        <p key="2">2</p>,
        <p key="3">3</p>
      ]}

      <h2>object(物件)</h2>
      {/* 物件不能直接渲染。會造成執行錯誤 */}
      {/* {{a: 1, b: 2}} */}
      {/* 可以用json字串呈現物件內容 */}
      {JSON.stringify({ a: 1, b: 2 })}

      <h2>function(函式)</h2>
      {/* 函式不能直接渲染。會造成執行錯誤 */}
      {/* {()=>{}}
      {function foo() {}} */}

    </>
  )
}
