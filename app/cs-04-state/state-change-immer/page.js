'use client'

import { useState } from 'react'
import { produce } from 'immer'

export default function StateChangePage() {
  const [user, setUser] = useState({
    name: '張三',
    profile: {
      phone: '0911123456',
      address: {
        city: '桃園市',
      },
    },
  })

  return (
    <>
      <h1>狀態更動與拷貝範例(immer)</h1>
      <hr />
      <h1>物件資料</h1>
      <p>{JSON.stringify(user)}</p>
      <div>
        <button
          onClick={() => {
            // 因為name屬性在第一階層，實際上淺拷貝就足夠
            // const nextUser = { ...user }
            // nextUser.name = '李四'

            //state v.s. draft
            // 在immer中，state是原始資料，draft是草稿狀態
            // 在immer中的draft(草稿狀態)，是用proxy產生的複本狀態，可以直接修改
            const nextUser = produce(user, (draft) => {
              draft.name = '李四'

            })
            setUser(nextUser)
          }}
        >
          更動姓名(name)
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            // 1 使用淺拷貝語法作兩層拷貝
            // const nextUser = { ...user, profile: { ...user.profile } }
            // // 2
            // nextUser.profile.phone = '0922123123'
            // // 3
            // setUser(nextUser)

            //immer
            const nextUser = produce(user, (draft) => {
              draft.profile.phone = '0922123123'
            })
            setUser(nextUser)
          }}
        >
          更動電話(phone)
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            // 1 使用深拷貝
            // const nextUser = JSON.parse(JSON.stringify(user))
            // // 2
            // nextUser.profile.address.city = '新竹市'
            // // 3
            // setUser(nextUser)

            //immer
            const nextUser = produce(user, (draft) => {
              draft.profile.address.city = '新竹市'
            })
            setUser(nextUser)
          }}
        >
          更動城市(city)
        </button>
      </div>
    </>
  )
}