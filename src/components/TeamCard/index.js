// Write your code here\
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCardDetails} = this.props
    const {imageUrl, name, id} = teamCardDetails
    return (
      <Link to={`/team-matches${id}`} className="link-item">
        <li className="team-card-items">
          <img src={imageUrl} alt={`${name}`} className="team-img" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
