'use client'

export default function ChildC({ dataForMe = '' }) {
  return (
    <>
      <h3>ChildC</h3>
      <p>從子女b來的資料: {dataForMe}</p>
    </>
  )
}