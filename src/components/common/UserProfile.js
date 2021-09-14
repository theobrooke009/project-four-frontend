import React from 'react'
import { getUser } from '../lib/api'
import UserGames from '../games/UserGames.js'

function ShowUser() {
  // const { userId } = useParams()
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

  console.log(isError)
  console.log(user)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUser()
        setUser(response)
      } catch (err) {
        setIsError(true)
      }
    } 
    getData()
  },[] )

  return (
    <div>
      <div>
        {user &&
    <h1>{user.data.username}</h1>
        }
      </div>

      <div className="user-games">
        <div>
          {user &&
        user.data.likedGames.map(game => (
          <UserGames key={game.id} game={game}  />
        ))}
        </div>
      </div>
    </div>
  )
}

export default ShowUser