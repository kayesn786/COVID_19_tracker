    import React from 'react';
    import { Cards , Chart, CountryPicker} from './components'; 
    import styles from './App.module.css';
    import { fetchData } from './api'
    import { fetchStates } from './api'
    
    class App extends React.Component{
        state = {
            globaldata:{},
            data:{},
            country: '',
            states:{},
        }

        async componentDidMount(){
            const fetchedData = await fetchData();
             this.setState({globaldata:fetchedData});
        }

        handleCountryChange = async (country) =>{
            const fetchedData = await fetchData(country);
            this.setState({data:fetchedData, country: country});
        
        }

        getTableData = async (country) =>{
            const fetchedData = await fetchStates(country);
            this.setState({states:fetchedData});
        
        }

        render(){
            const { globaldata, data, country } = this.state;
            //console.log(globaldata)
            return(
                <div className = {styles.container}>
                    <Cards data={globaldata} showPercent={false}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    {country?<Cards data={data} showPercent={true} gdata={globaldata} country={country}/>:null}
                    <Chart data={data} country={country}/>
                
                </div>
            )
        }
    }
    
    export default App; 