'use client'

import { useState } from 'react'

export default function MyCheckboxes() {
  // 選項(字串陣列or物件陣列)
  const options = ['狗', '貓', '金魚']

  // 先轉換成物件陣列 作為狀態初始值
  const initState = options.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })

  // 記錄選中的值
  const [pets, setPets] = useState(initState)

  // 處理書籤布林值切換(toggle)
  const onTogglePet = (petId) => {
    const nextPets = pets.map((v, i) => {
      if (v.id === petId) {
        // 如果比對出isbn=bookIsbn的成員，則進行再拷貝物件，並且作修改`bookmark: !v.bookmark`
        return { ...v, checked: !v.checked }
      } else {
        // 否則回傳原本物件
        return v
      }
    })

    // 3 設定到狀態
    setPets(nextPets)
  }

  const onCheckedAll = (e) => {
    const nextPets = pets.map((v) => {
      return { ...v, checked: e.target.checked }
    })
    setPets(nextPets)
  }

  return (
    <>
      <h2>核取方塊群組(MyCheckboxes)</h2>
      <input
        type="checkbox"
        // 當大家被選擇時，全選的checkbox會被勾選
        checked={pets.every((v) => v.checked)}
        onChange={onCheckedAll}
      />
      全選
      <hr />
      {pets.map((v, i) => {
        return (
          <div key={v.id}>
            <input
              type="checkbox"
              value={v.label}
              checked={v.checked}
              onChange={() => {
                onTogglePet(v.id)
              }}
            />{' '}
            {v.label}
          </div>
        )
      })}
    </>
  )
}
