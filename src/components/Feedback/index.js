import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    status: true,
  }

  emojiStatus = () => {
    this.setState({
      status: false,
    })
  }

  render() {
    const {status} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="card-bg">
          <h1>How satisfied are you with our customer support performance</h1>
          {status ? (
            <ul className="emoji-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id}>
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="emoj-size"
                    onClick={this.emojiStatus}
                  />
                  <p>{eachItem.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="love-container">
              <img src={loveEmojiUrl} alt="love emoji" className="l-img" />
              <h1>Thank you!</h1>
              <p>We will use your feedback</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
