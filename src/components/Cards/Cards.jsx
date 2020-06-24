import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

//{data:{confirmed, recovered, deaths, lastUpdate}},showPercent,gdata
function truncate (num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
  }

const Cards = (props) =>{
    if(!props.data.confirmed){
        return 'Loading...'; 
    }

    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center"><span className={styles.region}>{props.showPercent?`${props.country}: `:"Global: "}</span>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected<span className={styles.span1}>{props.showPercent? truncate(props.data.confirmed.value/props.gdata.confirmed.value *100,2)+"%":null}</span></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Recovered<span className={styles.span1}>{props.showPercent? truncate(props.data.recovered.value/props.gdata.recovered.value *100,2)+"%":null}</span></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.recovered.value} duration={2.5} separator=","/> 
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Deaths<span className={styles.span1}>{props.showPercent? truncate(props.data.deaths.value/props.gdata.deaths.value *100,2)+"%":null}</span></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;