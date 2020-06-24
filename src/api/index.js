import axios from 'axios';

const url =  'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUri = url;

    if(country){
        changeableUri = `${url}/countries/${country}`;
    }
    try{
        const { data:{ confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUri);
        return {confirmed, recovered, deaths, lastUpdate,};
    }catch(error){
        console.log(error);
    }
}



export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) =>({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchStates = async (country) =>{
    console.log(country);
    try {
        var c= country.toString().toLowerCase();
        if(country){
            const { data } = await axios.get(`${url}/countries/${c}/confirmed`);
        //console.log(data);
        // const modifiedData = data.map((stateData) =>({
        //     confirmed:stateData.confirmed.total,
        //     deaths: stateData.deaths.total,
        
        // }));
        return data;}
        else{
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () =>{
    try {
        const {data: { countries }} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name); 
    } catch (error) {
        console.log(error);
    }
}