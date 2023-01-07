import { use } from 'react'

type User = {
  id: number
  name: string
}

const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default function Home() {
  const users = use(fetchUsers())
  return (
    <div>
      <h1>jsonplaceholder Users!</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id}: {user.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
