import React from 'react'
import { getUser } from '../lib/api'
import { Link } from 'react-router-dom'
import UserGames from '../games/UserGames.js'
import ProfileStore from '../../images/ps-store.png'
import PsPlus from '../../images/ps-plus.png'

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
      <div className="user-nav columns">
        <div className="plus-image column is-half">
          <img className="plus" src={PsPlus} />
        </div>
        <div className="user-details column is half">
          <div>
            {user &&
          <img className="profile-image" src={user.data.profileImage} />
            }
          
          </div>  
          <div>
            {user &&
          <h1>{user.data.username}</h1>
            }
          </div>
        </div>
      </div>
    

      <div className="user-games">
        {/* <div>
          <img src={ProfileStore} />
        </div> */}
        <div className="games-menu">
          <Link to="/games">
            <img className="store-image" src={ProfileStore} />
          </Link>
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