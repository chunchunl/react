'use client'

// import { useContext } from 'react'
// import { AuthContext } from '@/hooks/use-auth'
import { useAuth } from '@/hooks/use-auth'
// 使用Link元件取代a標記(連結)
// 為了保持目前的狀態值(尤其是針對context中的狀態)
import Link from 'next/link'

export default function ProfilePage() {
  // context套用第2步: 在後代元件中使用useContext獲得Provider提供的value值
  // 改為useAuth (相當於useContext(AuthContext)
  const { user, isAuth } = useAuth()
  console.log(user)

  const profileData = (
    <>
      <p>姓名(name):{user.name}</p>
      <p>帳號(username):{user.username}</p>
      <p>電子郵件(email):{user.email}</p>
    </>
  )

  return (
    <>
      <h1>個人資料頁</h1>
      <Link href="/cs-05-props/context-user/login">登入頁</Link>
      <hr />
      {isAuth ? profileData : '請先登入'}
    </>
  )
}