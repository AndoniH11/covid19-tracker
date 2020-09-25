import React from 'react';
import Cards from './components/Cards'
import {fetchData} from './api/api';
import Titulo from './components/Titulo';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';


class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({
      data: fetchedData,
      country: country
    })

  }

  render() {
    return (
      <div>
        <Titulo />
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }

}

export default App;
