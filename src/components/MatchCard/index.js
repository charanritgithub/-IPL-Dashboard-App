// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeam, competingTeamLogo, result, matchStatus} = matchData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={`compiting team${competingTeam}`}
          className="match-team-logo"
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-card-status">{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
