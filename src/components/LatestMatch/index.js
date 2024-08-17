// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      compitingTeam,
      compitingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="latest-card-heading">latest Match</h1>
        <div className="latest-card-match">
          <div className="latest-card-match-logo-container">
            <div className="latest-match-card-details">
              <p className="compition-team-name">{compitingTeam}</p>
              <p className="compition-team-name">{date}</p>
              <p className="compition-team-name">{venue}</p>
              <p className="compition-team-name">{result}</p>
            </div>
            <img
              src={compitingTeamLogo}
              alt={`latest match ${compitingTeam}`}
              className="team-logo"
            />
          </div>
          <div className="latest-match-detals-info">
            <div className="latest-match-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="latest-match-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="latest-match-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="latest-match-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
