// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchesData: [], isLoading: true}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchdata = await response.json()
    const updatedData = {
      teamBannerUrl: fetchdata.team_banner_url,
      latestMatchDetails: {
        umpires: fetchdata.latest_match_details.umpires,
        result: fetchdata.latest_match_details.result,
        manOfTheMatch: fetchdata.latest_match_details.manOfTheMatch,
        id: fetchdata.latest_match_details.id,
        date: fetchdata.latest_match_details.date,
        venue: fetchdata.latest_match_details.venue,
        competingteam: fetchdata.latest_match_details.competing_team,
        competingTeamLogo: fetchdata.latest_match_details.competing_team_logo,
        firstInnings: fetchdata.latest_match_details.first_innings,
        secondInnings: fetchdata.latest_match_details.second_innings,
        matchStatus: fetchdata.latest_match_details.match_status,
      },
      recent_matches: fetchdata.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competing_team_logo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({matchesData: updatedData, isLoading: false})
  }

  renderTeamMatchDetails = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecenteMatchDetails()}
      </div>
    )
  }

  renderRecenteMatchDetails = () => {
    const {matchesData} = this.state
    const {recentMatch} = matchesData
    return (
      <ul className="recent-match-list">
        {recentMatch.map(eachMatch => (
          <MatchCard key={eachMatch.id} matchData={eachMatch} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="BallTriangle" color="#00BBFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`app-match-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatchDetails()}
      </div>
    )
  }
}
export default TeamMatches
