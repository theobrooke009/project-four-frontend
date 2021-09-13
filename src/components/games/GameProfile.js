import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllGames, getOneGame } from '../lib/api'

function ShowOneGame() {
  const { gameId } = useParams()
  const [game, setGame] = React.useState(null)
  const [allGames, setAllGames] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  
  console.log(isError)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneGame(gameId)
        setGame(response.data)
        console.log(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [gameId])


  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllGames()
        setAllGames(response.data)
        console.log(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  },[gameId])

  console.log(game)
  console.log(allGames)
  return (
    <section>
      {game &&
      <div className="container profile-container">
        <div>
          <h1>{game.name}</h1>
        </div>
        <div className="columns">
          <div>
            {game ? 
              <div className="profile-details">

                <div className="column is-one-third">
                  <img src={game.image} alt={game.name}/> 
                  <button className="like-button button is-info"> <div>Add to cart</div><div>£{game.price}</div></button>
                  <div> 
                    <h3>Overview</h3>
                    <h3>Bundles</h3>
                    <h3>Add Ons</h3>
                    <h3>Videos</h3>
                    <h3>Recommendations</h3>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{game.platform}</h3>
                    <h3>{game.fullGame}</h3>
                    <h3>{game.size} GB</h3>
                    <h2>{game.developer}</h2>
                  </div>
                  <div>
                    <p>{game.gameInfo}</p>
                  </div>
                  <div>

                    <img className="rating" src={game.rating} />
                  </div>
                </div>
              </div> : '' }
          </div>
        </div>
      </div>}
    </section>
  )
}

export default ShowOneGame