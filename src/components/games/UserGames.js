import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <div className="game-section">
      <Link to={`/games/${game.id}/`} key={game.id}>
        <div className="games-card">
          <div className="card-image">
            <figure className="image  menu-image">
              <img src={game.image} alt={game.name} />
            </figure>
          </div>
          <div className="card-content">
            <h1>{game.name}</h1>
          </div>
        </div>
      </Link>
    </div>

  )
}
export default GameCard