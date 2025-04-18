'use client'

import Child from "./child"

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 渲染Child元件 */}
      {/* 父母 渲染(render) 子女 */}
      {/* 父母元件可以藉由類似HTML給定屬性值的方式，來傳遞資料給子女元件，但不限於文字(字串)資料 */}
      <Child
      title="React很簡單"
      price={100}
      isConnected={false}
      aa={[1,2,3]}
      oa={{a:1,b:2}}
      sum={(x,y)=>x+y}
      jsx={<p>這是ReactJSX特殊物件</p>}
      />
    </>
  )
}
