'use client'

import { useState } from 'react'

export default function RegisterCCPage() {
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '姓名為必填',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 多欄位共用事件函式******
  // 1. 欄位需要名稱(name)屬性值，而且和狀條件屬性值一致
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    // 計算得來的屬性名稱語法
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // **阻擋表單提交預設行為
    // 預設 method="get" ，會把資料傳到伺服器
    e.preventDefault()

    // 作為表單驗證
    // 定義一個全新的錯誤物件(因為使用者會反覆操作修正這表單，代表每次驗證都是從開始)
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    // 驗證姓名
    if (user.name === ' ') {
      newErrors.name = '姓名為必填'
    }

     // 驗證email
    if (user.email === ' ') {
      newErrors.email = 'email為必填'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)
    // 判斷newErrors 是否有錯誤訊息
    const hasErrors = Object.values(newErrors).some((v) => v !== '')

    // 如果錯誤訊息有任何一個屬性值不是空字串，則不往下執行
    if (hasErrors) return
    // 最後沒問題fetch到伺服器
    fetch('')
  }

  return (
    <>
      <h1>會員註冊表單</h1>
      {/* 要使用form 標記的原因 */}
      {/* 1. 用formData 收集資料: 傳到伺服器  */}
      {/* 2. 要用HTML5(瀏覽器內建)的表單驗證功能 */}
      {/* 預設 method="get" ，會把資料傳到伺服器 */}
      <form onSubmit={handleSubmit} method="get" action="/">
        <label>
          姓名:{' '}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.name}</span>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.email}</span>
        <br />
        <label>
          密碼:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.password}</span>
        <br />
        <label>
          確認密碼:
          <input
            type="text"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.confirmPassword}</span>
        <br />
        {/* 預設**使用submit 按鈕，會觸發onSubmit 事件 */}
        {/* 所以眼睛塗樹要用type="button" */}
        <button type="submit">註冊</button>
      </form>
    </>
  )
}
