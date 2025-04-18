'use client'

import React, { useState, useEffect } from 'react'
// 導入.module.css檔案
import styles from './star-rating.module.css'

export default function StarRating({
  value = 0, // 初始評分，一開始點亮星星的數量，預設為0
  max = 5, // 最多評分，星星數量，預設為5
  onChange = () => {}, // 讓父母元件能得到點按後的評分函式
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>,
}) {
  // 記錄點按(click)時的分數，初始值為0代表一開始沒評分
  const [rating, setRating] = useState(value)
  // 記錄懸停(hover)時的分數，初始值為0代表一開始沒評分
  const [hoverRating, setHoverRating] = useState(0)

  // 狀態連動(連鎖): 當value更動時(從外部傳入的屬性值，可能是一個父母元件的狀態)，本元件內部的狀態rating也要隨之更動
  useEffect(() => {
    setRating(value)
  }, [value])
  //^^^^^^^^^監聽value的更動(change)

  return (
    <>
      <div>
        {/* 如何建立一個陣列包含1...N數字 */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(max)
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
                  // 傳送評分給父母元件
                  onChange(score)
                }}
                onMouseEnter={() => {
                  // 設定hover分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 設定回預設值0
                  setHoverRating(0)
                }}
              >
                <span
                  // 此按鈕的分數(score)小於等於目前的評分狀態(rating)或懸停評分(hoverRating)，都要套用on點亮樣式
                  // 第1種: 用style屬性套用動態樣式
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating
                  //       ? fillColor
                  //       : emptyColor,
                  // }}
                  //
                  // 第2種: 用css modules套用動態樣式
                  // 1. 要搭配style屬性，將動態的屬性值轉換為css變數值
                  // 2. 在css modules檔案中，套用css變數值(見star-rating.module.css檔案修改內容)
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
      <p>評分: {rating}</p>
    </>
  )
}