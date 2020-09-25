import React from 'react';
import {fetchCountries} from '../api/api'

class CountryPicker extends React.Component{

    state = {
        countries: []
    }

    async componentDidMount(){
        const data = await fetchCountries()
        const {countries} = data
        this.setState({
            countries: countries
        })
    }

    render(){
        const {handleCountryChange} = this.props
        return(
            <div className='selector-container'>
                <form>
                    <select className='selector'
                        onChange={(e) => handleCountryChange(e.target.value)}
                        >
                        <option value=''>Global</option>
                        {this.state.countries.map(country => 
                        <option value={country.name} key={country.name}>
                            {country.name}
                        </option>)}
                    </select>
                </form>
            </div>
        )
    }
}

export default CountryPicker