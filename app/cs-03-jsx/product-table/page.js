'use client'

// 導入時就自動轉為JS資料格式
import products from './_data/Product.json'

// next 中專用於圖片 設定大小
import Image from 'next/image'

// 直接導入css
// import './_styles/product-table.css'

//使用css modules
// 建議小駝峰命名 但通常不會強人所難
import styles from './_styles/product-table.module.css'
export default function ProductTablePage() {
  // console.log(data)
  return (
    <>
      <table className={styles['my-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* 在map時常用英文複數詞轉為單數詞 例如products -> product */}
          {/*  v -> product */}
          {/* 不要用p 取代 product ， 直接用v就好 */}

          {/* 使用map時key值是必要的，加在裡面的回呼函式的return最接近一個元素上，有id或資料庫主鍵(來自資料庫)優先使用 */}
          {/* `?.`稱為"可選串連(Optional chaining)"是一種保護語法，只能保護不是null或undefined時呼叫造成錯誤*/}
          {products.map((product) => {
            return (
              // 主鍵是sn，最適合當key值
              <tr key={product.sn}>
                <td>{product.sn}</td>
                <td>
                  <Image
                    src={`/images/${product.photo}`}
                    alt=""
                    width={150} // 寬度
                    height={150} // 高度
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
