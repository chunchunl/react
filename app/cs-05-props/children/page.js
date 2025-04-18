'use client'

import Parent from "./_components/parent"
import Child from "./_components/child"

export default function ChildrenPage(props) {
  return (
    <>
      <h1>props.children範例</h1>
      <hr />
      {/* 其中是一個字串 */}
      <Parent>這是一個字串</Parent>
      {/* 其中甚麼都沒有 */}
      <Parent></Parent>
      {/* 其中是多個元件 */}
      <Parent>
        <Child/>
        <Child/>
      </Parent>
    </>
  )
}