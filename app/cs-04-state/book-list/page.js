'use client'

import { useState } from 'react'
// 導入的圖片只能用next提供的Image元件
import Image from 'next/image'

// 範例資料
import data from './_data/books.json'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'

export default function BookListPage() {
  // 擴充原本的書籍資料，多一個bookmark屬性(布林值，代表是否有加入書籤，預設值false)
  const initState = data.map((v) => {
    return { ...v, bookmark: false }
  })

  // 定義書籍用狀態
  const [books, setBooks] = useState(initState)

  // 處理書籤布林值切換(toggle)
  const onToggleBookmark = (bookIsbn) => {
    const nextBooks = books.map((v, i) => {
      if (v.isbn === bookIsbn) {
        // 如果比對出isbn=bookIsbn的成員，則進行再拷貝物件，並且作修改`bookmark: !v.bookmark`
        return { ...v, bookmark: !v.bookmark }
      } else {
        // 否則回傳原本物件
        return v
      }
    })

    // 3 設定到狀態
    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>書名</th>
            <th>作者</th>
            <th>加入書籤</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      onToggleBookmark(book.isbn)
                    }}
                    src={book.bookmark ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}