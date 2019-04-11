import React from "react"
import "./UserList.scss"
const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map(({ id, fullname }) => (
        <li key={id}>
          {fullname}
          <button className="button-info">i</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList