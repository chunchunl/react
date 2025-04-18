'use client'

// 導入的圖片只能用next提供的Image元件
import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '../_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '../_icons/bookmark.svg'

// 只傳遞所需的物件屬性值(isbn, bookmark)，而非整個物件(book)的原因
// 1. 為了最小(最低)權限原則(Principle of least privilege)
// 2. 為了方便進行效能最佳化與除錯
export default function ListItemIcon({
  isbn = '',
  bookmark = false,
  onToggleBookmark = () => {},
}) {
  return (
    <>
      <Image
        onClick={() => {
          onToggleBookmark(isbn)
        }}
        src={bookmark ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
