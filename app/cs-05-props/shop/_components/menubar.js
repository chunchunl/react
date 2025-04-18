'use client'

import React, { useState, useEffect } from 'react'
import styles from './menubar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menubar() {
  // 取得目前路徑
  const pathname = usePathname()
  console.log('pathname', pathname)

  return (
    <>
      <div className={styles.menu}>
        <ul>
          {/* 判斷是否要加上點亮active樣式 */}
          <li className={pathname.includes('/product') ? styles.active : ''}>
            <Link href="./product">商品頁</Link>
          </li>
          <li
            className={pathname.includes('/cart') ? styles.active : ''}
          >
            <Link href="./cart">購物車頁</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
