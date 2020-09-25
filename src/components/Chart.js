import React from 'react';
import {fetchDailyData} from '../api/api'
import {Line, Bar } from 'react-chartjs-2';

class Chart extends React.Component{

    state= {
        dailyData: []
    }

    async componentDidMount(){
        const fetchAPI = await fetchDailyData();
        this.setState({
            dailyData: fetchAPI
        })
    }

    render(){
        const {dailyData} = this.state
        const {data: {confirmed, recovered, deaths}, country} = this.props

        const lineChart = (
            dailyData.length != 0 ? 
               (
                   <Line className='grafico'
                        data={{
                            labels: dailyData.map(({date}) => date),
                            datasets: [{
                                data: dailyData.map(({confirmed}) => confirmed),
                                label: 'Contagiados',
                                borderColor: '#8ACA2B',
                                fill: true
                            }, {
                                data: dailyData.map(({deaths}) => deaths),
                                label: 'Muertes',
                                borderColor: 'rgb(209, 53, 53)',
                                backgroundColor: 'rgba(209, 53, 53, 0.5)',
                                fill: true,
                            }]
                        }}
                    />
               ) : null
        )

        const barChart = (
            confirmed ? (
                <Bar   
                    data={{
                        labels: ['Contagiados', 'Recuperados', 'Muertes'],
                        datasets:[{
                            label: 'Personas',
                            backgroundColor: [
                                ' rgb(22, 22, 190)',
                                'rgb(49, 153, 49)',
                                'rgb(209, 53, 53)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend:{display: false},
                        title: {display: true, text: `Estado actual en ${country}`}
                    }}
                />
            ) :
            null
        )

        return(
            <div className='grafico-container'>
               {country ? barChart : lineChart}
            </div>


        )
    }
}

export default Chart