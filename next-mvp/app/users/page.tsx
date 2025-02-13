import React from 'react'
import Link from 'next/link'

interface User {
  id: number;
  name: string;
  email: string
}

const UsersPage = async () => {
  const res= await fetch (
    'https://jsonplaceholder.typicode.com/users',
    // { cache: 'no-store'}
    );
  const users:[] = await res.json();

  return (
    <main>
      <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="33" height="33" fill="#fff" x="10" y="64" opacity="100%">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </Link>

    <div>DashBoard</div>
    <>
    <h1>Users</h1>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    <table className='table table-bordered'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>   
      <tbody>
      {users.map(user => <tr key={user.id}> 
        <th>{user.name}</th>
        <th>{user.email}</th></tr>)}
      </tbody>
    </table>
    </>
  </main>
 )
}
export default UsersPage