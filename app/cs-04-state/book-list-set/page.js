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
  // 定義書籤的狀態(陣列)，也可以是"Set", Map, 物件(索引作為屬性), 或是有加入到書籤的書(物件)
  // 狀態中記錄isbn(代表有加入到我的書籤)
  const [bookmarks, setBookmarks] = useState(new Set())

  // 處理書籤布林值切換(toggle)
  const onToggleBookmark = (bookIsbn) => {
    // 符合不可改變物件設計，要建立複本
    const updatedBookmarks = new Set(bookmarks)
    // 判斷目前這個bookIsbn是否有在狀態中
    if (updatedBookmarks.has(bookIsbn)) {
      // 如果有 ===> 移出陣列
      updatedBookmarks.delete(bookIsbn)
    } else {
      // 否則 ===> 加入陣列
      updatedBookmarks.add(bookIsbn)
    }
    setBookmarks(updatedBookmarks)
  }

  return (
    <>
      <h1>書籍清單(Set)</h1>
      <hr />
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
          {data.map((book) => {
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
                    src={
                      // 改為使用狀態中是否有isbn(代表有加入到我的書籤)
                      bookmarks.has(book.isbn) ? bookmarkIconFill : bookmarkIcon
                    }
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
}'use client'

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
  // 定義書籤的狀態(陣列)，也可以是"Set", Map, 物件(索引作為屬性), 或是有加入到書籤的書(物件)
  // 狀態中記錄isbn(代表有加入到我的書籤)
  const [bookmarks, setBookmarks] = useState(new Set())

  // 處理書籤布林值切換(toggle)
  const onToggleBookmark = (bookIsbn) => {
    // 符合不可改變物件設計，要建立複本
    const updatedBookmarks = new Set(bookmarks)
    // 判斷目前這個bookIsbn是否有在狀態中
    if (updatedBookmarks.has(bookIsbn)) {
      // 如果有 ===> 移出陣列
      updatedBookmarks.delete(bookIsbn)
    } else {
      // 否則 ===> 加入陣列
      updatedBookmarks.add(bookIsbn)
    }
    setBookmarks(updatedBookmarks)
  }

  return (
    <>
      <h1>書籍清單(Set)</h1>
      <hr />
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
          {data.map((book) => {
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
                    src={
                      // 改為使用狀態中是否有isbn(代表有加入到我的書籤)
                      bookmarks.has(book.isbn) ? bookmarkIconFill : bookmarkIcon
                    }
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
}'use client'

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
  // 定義書籤的狀態(陣列)，也可以是"Set", Map, 物件(索引作為屬性), 或是有加入到書籤的書(物件)
  // 狀態中記錄isbn(代表有加入到我的書籤)
  const [bookmarks, setBookmarks] = useState(new Set())

  // 處理書籤布林值切換(toggle)
  const onToggleBookmark = (bookIsbn) => {
    // 符合不可改變物件設計，要建立複本
    const updatedBookmarks = new Set(bookmarks)
    // 判斷目前這個bookIsbn是否有在狀態中
    if (updatedBookmarks.has(bookIsbn)) {
      // 如果有 ===> 移出陣列
      updatedBookmarks.delete(bookIsbn)
    } else {
      // 否則 ===> 加入陣列
      updatedBookmarks.add(bookIsbn)
    }
    setBookmarks(updatedBookmarks)
  }

  return (
    <>
      <h1>書籍清單(Set)</h1>
      <hr />
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
          {data.map((book) => {
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
                    src={
                      // 改為使用狀態中是否有isbn(代表有加入到我的書籤)
                      bookmarks.has(book.isbn) ? bookmarkIconFill : bookmarkIcon
                    }
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