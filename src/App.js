import {Component} from 'react'
import ProductCard from './ProductCard'

import './App.css'

class App extends Component {
  state = {
    cardsList: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)

    const updatedData = data.Packages.map(eachData => ({
      id: eachData.id,
      description: eachData.description,
      imageUrl: eachData.image_url,
      name: eachData.name,
    }))
    this.setState({cardsList: updatedData})
  }

  renderProductsList = () => {
    const {cardsList} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        <ul>
          {cardsList.map(eachCard => (
            <ProductCard key={eachCard.id} cardDetails={eachCard} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default App
