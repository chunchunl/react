'use client'

import { useRef } from 'react'
import styles from './_styles/page.module.css'

export default function RegisterCCPage() {
  // 使用ref為每個欄位定義
  const nameErrorRef = useRef(null)
  const emailErrorRef = useRef(null)
  const passwordErrorRef = useRef(null)
  const confirmPasswordErrorRef = useRef(null)

  const handleSubmit = (e) => {
    // 阻擋表單提交預設行為
    e.preventDefault()

    // 用FormData來獲取每個欄位的值
    const fd = new FormData(e.target)

    // 用get方法來取得每個欄位值
    const user = {
      name: fd.get('name'),
      email: fd.get('email'),
      password: fd.get('password'),
      confirmPassword: fd.get('confirmPassword'),
    }

    console.log(user)

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
    nameErrorRef.current.innerText = newErrors.name
    emailErrorRef.current.innerText = newErrors.email
    passwordErrorRef.current.innerText = newErrors.password
    confirmPasswordErrorRef.current.innerText = newErrors.confirmPassword
    // 判斷是否newErrors是否有錯誤訊息，如果其中有一個屬性不是空字串，代表有錯誤訊息
    const hasErrors = Object.values(newErrors).some((v) => v !== '')
    // 如果有發生任何一個錯誤，不送出到伺服器(跳出函式)
    if (hasErrors) return

    // 最後沒問題提交(fetch)到伺服器
    alert('表單送出')
  }

  return (
    <>
      <h1>會員註冊表單(不可控uncontrolled)</h1>
      {/* 要使用form標記的原因 */}
      {/* 1. 用FormData */}
      {/* 2. 要用HTML5(瀏覽器內建)的表單驗証功能 */}
      <form onSubmit={handleSubmit}>
        <label>
          姓名: <input type="text" name="name" />
        </label>
        <br />
        <span className={styles['error']} ref={nameErrorRef}></span>
        <br />
        <label>
          Email: <input type="text" name="email" />
        </label>
        <br />
        <span className={styles['error']} ref={emailErrorRef}></span>
        <br />
        <label>
          密碼: <input type="password" name="password" />
        </label>
        <br />
        <span className={styles['error']} ref={passwordErrorRef}></span>
        <br />
        <label>
          確認密碼: <input type="password" name="confirmPassword" />
        </label>
        <br />
        <span className={styles['error']} ref={confirmPasswordErrorRef}></span>
        <br />
        <button type="submit">註冊</button>
      </form>
    </>
  )
}
