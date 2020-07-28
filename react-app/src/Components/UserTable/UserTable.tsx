import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import './userTable.scss'

import UserListContext from "GlobalState/UserList/UserListContext";

export const UserTable:React.FC =  () => {
  const { state } = useContext(UserListContext)
  const { users } = state
  return (
    <Container fluid>
      <Table className='mt-2' striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Group</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.group.name}</td>
              <td>{user.createdAt}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
    )
}