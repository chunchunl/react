'use client'

// children 是 props中內建的屬性，用來接收子元件
export default function Parent({children}) {
  return (
    <>
      <h2>Parent</h2>
      <div
    //   小駝峰寫法
        style={{color:'orange', backgroundColor:'purple', padding:'20px'}}
      >
        {children}
      </div>
    </>
  )
}