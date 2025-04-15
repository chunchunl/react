'use client'

import { useState } from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  // 記錄點按(click)時的分數，初始值為0代表一開始沒評分
  const [rating, setRating] = useState(0)

  // 記錄懸停(hover)時的分數，初始值為0代表一開始沒評分
  // MouseEnter/ MouseLeave
  const [hoverRating, setHoverRating] = useState(0) 

  return (
    <>
      <h1>星星評分範例</h1>
      <hr />
      <div>
        {/* 如何建立一個陣列包含1...N數字 */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星評分按鈕的分數(索引+1)
            const score = i + 1

            return (
              <button
                key={i}
                className={styles.starBtn}
                onClick={() => {
                  // 設定評分
                  setRating(score)
                }}
                onMouseEnter={() => {
                  // 設定hover分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 設定 回預設值
                  setHoverRating(0)
                }}
              >
                <span
                  // 此按鈕的分數(score)小於等於目前的評分狀態(rating)或璇廷評分(hoverRating)，都要套用on點亮樣式
                  className={
                    score <= rating || score <= hoverRating 
                    ? styles.on 
                    : styles.off}
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      <p>評分: {rating}</p>
    </>
  )
}