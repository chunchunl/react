'use client'



// props 本身是個物件

// 可以用"傳入參數物件藉購語法，提取每個props中的物件屬性名為變數名稱
// 要加花括號{}
export default function Child({title, price, isConnected, aa, oa, sum, jsx}) {
  // console.log(props)

  return (
    <>
      <h2>Child(子元件)</h2>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum={sum(10,20)}</p>
      {/* 這是JSX特殊物件 p裡不能再用p */}
      {jsx} 
    </>
  )
}
