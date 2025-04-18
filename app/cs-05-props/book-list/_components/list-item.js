'use client'

// 導入FavIcon元件
import ListItemIcon from './list-item-icon'

// 從父母元件傳入的屬性中提取出book與onToggleBookmark
export default function ListItem({ book = {}, onToggleBookmark = () => {} }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <ListItemIcon
            isbn={book.isbn}
            bookmark={book.bookmark}
            onToggleBookmark={onToggleBookmark}
          />
        </td>
      </tr>
    </>
  )
}
