'use client'

// 子女元件可以由函式的傳入參數值中，得到父母元件傳來的值
// props必定是物件值，裡面包含了所有父母元件傳來的資料

// 可以用"傳入參數物件解構語法"，提取每個props中的物件屬性名為變數名稱
// 目的1: 讓程式碼更簡潔，減少冗餘語法
// 目的2: 開發工具可以協助自動完成
// 目的3: 定義預設屬性值(有助於元件穩健性)，預設值需要和給定的值資料類型一致
export default function Child({
  title = '',
  price = 99,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
  jsx = <></>,
}) {
  // console.log(props)

  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
      {/* 這是JSX特殊物件 p裡不能再用p */}
      {jsx}
    </>
  )
}