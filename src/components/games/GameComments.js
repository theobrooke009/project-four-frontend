import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createComment } from '../lib/api'

const initialState = {
  text: '',
}

function Newtext() {
  const { gameId } = useParams()
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value, games: parseInt(gameId) })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await createComment(gameId, formData)
      history.push(`/games/${gameId}`)
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column text-container"
            onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Comment</label>
              <div>
                <textarea
                  className={`text-box input ${formErrors.text ? 'is-danger' : ''}`}
                  placeholder="text"
                  name="text"
                  onChange={handleChange}
                  value={formData.text}
                />
        
              </div>
              {formErrors.text && (
                <p className="help is-danger">{formErrors.text}</p>
              )}
            </div>
            <div className="field">
              <button type="submit" className="button is-info is-fullwidth">
                Submit text
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newtext