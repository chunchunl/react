'use client'

import { useEffect, useState } from 'react'
import styles from './_styles/page.module.css'

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
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 多欄位共用事件函式
  // 欄位需要有名稱(name)屬性值，而且和狀態物件的屬性值一致
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    // [e.target.name] ==> 計算得來屬性名稱語法(computed property names)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 阻擋表單提交預設行為
    e.preventDefault()

    // 作表單驗証
    // 定義一個全新的錯誤物件(因為使用者會反覆操作修正這表單，代表每次驗証都是從頭驗証起)
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    if (user.name === '') {
      newErrors.name = '姓名為必填'
    }

    if (user.email === '') {
      newErrors.email = 'Email必填'
    }

    if (user.password.length < 5 || user.password.length > 10) {
      newErrors.password = '密碼長度需介於5到10字元'
    }

    if (user.confirmPassword.length < 5 || user.confirmPassword.length > 10) {
      newErrors.confirmPassword = '確認密碼長度需介於5到10字元'
    }

    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼不相同'
      newErrors.confirmPassword = '密碼與確認密碼不相同'
    }

    if (user.password === '') {
      newErrors.password = '密碼必填'
    }

    if (user.confirmPassword === '') {
      newErrors.confirmPassword = '確認密碼必填'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)
    // 判斷是否newErrors是否有錯誤訊息，如果其中有一個屬性不是空字串，代表有錯誤訊息
    const hasErrors = Object.values(newErrors).some((v) => v !== '')
    // 如果有發生任何一個錯誤，不送出到伺服器(跳出函式)
    if (hasErrors) return

    // 最後沒問題提交(fetch)到伺服器
    alert('表單送出')
  }

  // 模擬從一開始從伺服器得到資料
  useEffect(() => {
    // 從伺服器獲得資料...
    //
    // 設定到狀態裡
    setUser({
      name: '哈利',
      email: 'harry@test',
      password: '123456',
      confirmPassword: '123456',
    })
  }, [])

  return (
    <>
      <h1>會員個人資料編輯表單(可控controlled)</h1>
      {/* 要使用form標記的原因 */}
      {/* 1. 用FormData */}
      {/* 2. 要用HTML5(瀏覽器內建)的表單驗証功能 */}
      <form onSubmit={handleSubmit}>
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
        <span className={styles['error']}>{errors.name}</span>
        <br />
        <label>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className={styles['error']}>{errors.email}</span>
        <br />
        <label>
          密碼:{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className={styles['error']}>{errors.password}</span>
        <br />
        <label>
          確認密碼:{' '}
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className={styles['error']}>{errors.confirmPassword}</span>
        <br />
        <button type="submit">更動</button>
      </form>
    </>
  )
}