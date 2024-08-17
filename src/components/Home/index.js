// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updateData = fetchData.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      imageUrl: eachData.team_image_url,
    }))
    this.setState({teamsData: updateData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="team-list-container">
        {teamsData.map(team => (
          <TeamCard key={team.id} teamCardDetails={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo-img"
            />
            <p className="ipl-dash">IPL Dashboard</p>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}
export default Home
