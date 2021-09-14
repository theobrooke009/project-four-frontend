import React from 'react'

import { useParams, Link } from 'react-router-dom'
import { getAllGames, getOneGame, likeGame } from '../lib/api'
// import GameCard from './GameCard'
import CommentCard from './CommentCard'
import RecommendCard from './RecommendCard'



function ShowOneGame() {
  const { gameId } = useParams()
  const [game, setGame] = React.useState(null)
  const [allGames, setAllGames] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [content, setContent] =  React.useState('Recommendations')
  

  console.log(isError)





  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneGame(gameId)
        setGame(response.data)
        console.log('the one game', game)
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
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  },[gameId])




 
  const OnClick = () => {
    return likeGame(gameId)
  }
  const filterByGenre = () => {
    if (game && allGames) {
      return allGames.filter( item => {
        return item.genre === game.genre && item.name !== game.name
      })
    }
  }

  const handleContent = (e) => {
    setContent(e.target.innerText)
    console.log('CONTENT', e.target.innerText)
  }
  return (
    <section>
      {game &&
      <div className="container profile-container">
        <div className="title-holder">
          <h1>{game.name}</h1>
        </div>
        <div className="columns">
          <div>
            {game ? 
              <div className="profile-details">

                <div className="column is-one-third">
                  <img src={game.image} alt={game.name}/> 
                  <button className="like-button button is-info"
                    onClick={OnClick}> <div>Add to cart</div><div>£{game.price}</div></button>
                  <div> 
                    <h3
                      onClick={handleContent}
                    ><button className="like-button button is-info">Reviews</button></h3>
                    <h3>
                      <Link to={`/games/${game.id}/comments`}>
                        <button className="like-button button is-info">Write a review</button>
                      </Link>
                    </h3>


                    <h3
                      onClick={handleContent}
                    ><button className="like-button button is-info">Recommendations</button></h3>
                  </div>
                </div>
                <div>
                  <div className="game-info">
                    <div>
                      <h2>| {game.platform} |</h2>
                    </div>
                    <div>
                      <h2> {game.fullGame} |</h2>
                    </div>
                    <div>
                      <h2> {game.size} GB |</h2>
                    </div>
                    <div>
                      <h2> {game.developer} |</h2>
                    </div>
                  </div>
                  <div className="game-outline">
                    <p>{game.gameInfo}</p>
                  </div>
                  <div>

                    <img className="rating" src={game.rating} />
                  </div>

                  <div className="reviews">
                    <div>
                      {content === 'Reviews' && allGames &&
                    <h3>See what other users are saying about {game.name}</h3>}
                      {content === 'Reviews' && allGames &&
              game.comments.map(comment => {
                return (
                  <CommentCard key={comment.id} comment={comment} />
                )
              })}
                    </div>
                  </div>


                  <div className="recommendations">
                    <div className="recom-container">
                      {content === 'Recommendations' && allGames &&
                    <h1>You may also enjoy</h1>}
                      {content === 'Recommendations' && allGames &&
              filterByGenre().map(game => {
                return (
                  <RecommendCard key={game.id} game={game} />
                )
              })}
                    </div>
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