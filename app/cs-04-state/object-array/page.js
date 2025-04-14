'use client'

import { useState } from 'react'

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArrayPage() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
                <td>
                  <button
                    onClick={() => {
                      const nextData = [...data]
                      nextData.splice(i, 1)
                      setData(nextData)
                    }}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 如何免id重複造成key值重覆的問題 (key必須唯一)
          // 1. 使用Uuuid(或其他能產生亂數雜湊的函式庫或套件)
          // const newId = self.crypto.randomUUID()

          // 2. 使用時間戳記 時間日期物件轉為毫秒整值(或組合字串)
          // 下面語法相當於: `+new Date()` 或 `Date.now()`
          // const newId = Number(new Date())

          // 3. 仿照資料庫資料表自動遞增id數字(只能用在有序或數字類才能用)
          // 提取所有在狀態中的id為一個數字陣列 ex. [1,2,3,4]
          const ids = data.map((v) => v.id)
          // // 新id為最大值+1 如果狀態(陣列)中沒有id值(無資料)，則新id為1
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // 檢測用 測試用 函式 filter
          const nextData = data.filter((v) => {
            return v.text.includes('a') // 過濾string字串中包含a的資料
          })

          // 3
          setData(nextData)

          // 簡化語法如下**(不要一開始就學這個)
          // setData(data.filter((v) => v.text.includes('a')))
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // 檢測用 測試用 函式 filter
          const nextData = data.filter((v, i) => {
            // 過濾出文字不為b的資料
            return v.text !== 'b' // 過濾string字串中包含a的資料
          })
          // 3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料(=相當於過濾出文字不為b的物件資料) (反向命題:
        過濾出文字為b的物件資料)
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // 檢測用 測試用 函式 filter
          const nextData = data.filter((v, i) => {
            // 過濾出id不為4的資料
            return v.id !== 4 // 過濾string字串中包含a的資料
          })
          // 3
          setData(nextData)
        }}
      >
        7-1. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // SPLICE 黏接
          // 1. 他有副作用。亦即會更動到呼叫他的陣列，不可以用狀態呼叫他 // 照理說要唯讀
          // 2. 他需用作用在索引值上，亦即陣列的index
          // 刪除公式：　陣列.splice(開始索引, 刪除幾個)

          // STEP1: 先找到要刪除的資料索引值
          const foundIndex = data.findIndex((v) => v.id === 4)

          // STEP2: 判斷是否找到要刪除的資料(沒找到會返回 -1)
          if (foundIndex !== -1) {
            // STEP2-1:拷貝到所需階層（深拷貝或是視作用階層陣列）
            const nextData = [...data]
            // STEP3: 進行刪除（套用刪除公視）
            nextData.splice(foundIndex, 1)
            // STEP4: 設定回原本的狀態中
            setData(nextData)
          }
        }}
      >
        7-2. 刪除id為4的物件資料(splice)
      </button>
      <br />
      <button
        onClick={() => {
          // 官網範例: map+展開物件
          // **只限於物件陣列(第一層陣列+第二層物件)
          // 1 2 用map 展開陣列的物件
          const nextData = data.map((v, i) => {
            // 如果比對出id=3的成員，則進行再拷貝物件，並且做修改 `text: 'cccc'`
            if (v.id === 3) {
              return { ...v, text: 'cccc' }
            } else {
              // 否則回傳原本的物件
              return v
            }
          })
          // 3 回傳到狀態中(設定到狀態)
          setData(nextData)

          // 簡化寫法(不建議)
          // setData(data.map((v, i) => v.id === 3 ? {...v, text: 'cccc'} : v))
        }}
      >
        8-1. 取代id為3的文字為cccc(map+展開物件)
      </button>
      <br />
      <button
        onClick={() => {
          // 深拷貝+直接指定值:　注意需要的索引值
          //  ***一定要會!!!

          // 步驟1: 找到要更動的成員索引值(findIndex沒有副作用)
          const foundIndex = data.findIndex((v) => v.id === 3)

          // 步驟2: 判斷是否有找到(沒找到會返回 -1)
          if (foundIndex !== -1) {
            // 2-1 拷貝到所需階層，需作用到第二階層物件 = 深拷貝
            const nextData = JSON.parse(JSON.stringify(data))
            // 2-2 進行更動
            nextData[foundIndex].text = 'cccc'
            // 2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        8-2. 取代id為3的文字為cccc(深拷貝+直接指定值)
      </button>
      <br />
      <button
        onClick={() => {
          // 清空表格
          setData([])
        }}
      >
        9-1. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          // 重置表格
          setData(sample)
        }}
      >
        9-2. 重置表格
      </button>
      <br />
      // 最難*****
      <button
        onClick={() => {
          // 1 2
          // SPLICE 黏接
          // 1. 他有副作用。亦即會更動到呼叫他的陣列，不可以用狀態呼叫他 // 照理說要唯讀
          // 2. 他需用作用在索引值上，亦即陣列的index
          // 插入公式：　陣列.splice(開始索引foundIndex, 刪除幾個, 插入的物件insertValue)

          // 步驟1: 找到要插入的成員索引值(findIndex沒有副作用)
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 步驟2: 判斷是否有找到(沒找到會返回 -1)
          if (foundIndex !== -1) {
            // 2-1 拷貝到所需階層(深拷貝或是視作用階層陣列)
            const nextData = [...data]
            // 2-2 套用插入公式
            const newObj = { id: 5, text: 'bbb' }
            nextData.splice(foundIndex + 1, 0, newObj)
            // 2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        10-1. 在id為2後面插入id為5與文字為bbb的物件(splice)
      </button>
      <br />
      <button
        onClick={() => {
          // 官網範例: slice(分割、切片) 用於產生子女陣列
          // 1. slice沒有副作用，意即不會更動到呼叫陣列，可以用data呼叫它
          // 2. 它需要作用在哪個成員的索引值
          // 分割(產生子女陣列)公式: array.slice(startIndex, endIndex)
          // (不包含endIndex成員，endIndex沒寫代表一直切到最後一個成員)
          // 步驟1: 找到要插入的成員索引值(findIndex沒有副作用)
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 步驟2: 判斷是否有找到(沒找到會返回 -1)
          if (foundIndex !== -1) {
            // 2-1, 2-2 由找到的索引值產生兩個子女陣列
            const aa = data.slice(0, foundIndex + 1)
            const ab = data.slice(foundIndex + 1)
            // 合併插入的物件為一個新陣列
            const newObj = { id: 5, text: 'bbb' }
            const nextData = [...aa, newObj, ...ab]
            // 2-3 設定到狀態
            setData(nextData)
          }
        }}
      >
        10-2. 在id為2後面插入id為5與文字為bbb的物件(slice)
      </button>
    </>
  )
}
