'use client'

import { useState } from 'react'

export default function JsxCondRenderPage() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX條件式渲染</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <hr />
      {/* total 改為0 會顯示 */}
      {total && <p>1-1.目前總數為{total}</p>}
      {/* 強制轉換判斷條件為布林值 */}
      {/* 語法較穩定 */}
      {Boolean(total) && <p>2-1.目前總數為{total}</p>}
      {!!total && <p>2-2.目前總數為{total}</p>}
      {/* 改用比較運算子為條件，必定會運算出布林值 */}
      {total > 0 && <p>3-1.目前總數為{total}</p>}
      {total !== 0 && <p>3-2.目前總數為{total}</p>}
      {/* 改用三元運算子 (條件 ? 運算式1 : 運算式2) */}
      {/* 相當於if...else */}
      {total  ?  <p>4-1.目前總數為{total}</p> : ''}
    </>
  )
}