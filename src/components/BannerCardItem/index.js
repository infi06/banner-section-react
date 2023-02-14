// Write your code here.
import './index.css'

const BannerCardItem = props => (Ś
  const {userDetails} = props
  const {headerText, description} = userDetails
  return (
    <li className="bg-container">
      <div className="card-1">
        <h1 className="header">{headerText}</h1>
        <p className="describe">{description}</p>
        <button className="button">Show More"</button>
      </div>
    </li>
  )
}

export default BannerCardItem
