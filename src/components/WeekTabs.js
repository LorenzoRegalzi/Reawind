import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';
import { getMonthWeather} from '../store/actions/monthWeatherAction';
import React, {useState, useEffect} from 'react';
import '../App.css';



// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination,]);

export default function SimpleCard()  {

    const [loading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.monthWeather);
  
    
  
  
    useEffect(() => {
      dispatch(getMonthWeather());
    }, [dispatch]);

  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }



    const times = [];
    const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    

    for (var i = 0; i < 8; i++) {
      
            let temperature = data.daily[i].temp.day;

            let aroundTemperature = Math.round(temperature);

            let iconImg = data.daily[i].weather[0].icon;
      
            var onlyHours = new Date().getDay() + i;

            let dayString = days[onlyHours]
            
            times.push({date : dayString, temperature : aroundTemperature, icon : iconImg });
       
      }


      


  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{width:'100%',height:'100%',}}
    >
      <SwiperSlide style={{display:'flex', justifyContent: 'space-evenly', paddingTop: 30}}>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>{times[0].date}</h2>
            <p className="temperatureWeek">{times[0].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[0].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25}}>
            <h2>{times[1].date}</h2>
            <p className="temperatureWeek">{times[1].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[1].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage:'linear-gradient(to right, #75a3ef, #76a4ef, #76a6f0, #77a7f0, #78a8f0, #79aaf0, #79abf1, #7aadf1, #7baff2, #7cb1f3, #7db3f3, #7eb5f4)',borderRadius:25}}>
            <h2>{times[2].date}</h2>
            <p className="temperatureWeek">{times[2].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[2].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div> 
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-evenly', paddingTop: 30}}>
    <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>{times[3].date}</h2>
            <p className="temperatureWeek">{times[3].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[3].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25}}>
            <h2>{times[4].date}</h2>
            <p className="temperatureWeek">{times[4].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[4].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage:'linear-gradient(to right, #75a3ef, #76a4ef, #76a6f0, #77a7f0, #78a8f0, #79aaf0, #79abf1, #7aadf1, #7baff2, #7cb1f3, #7db3f3, #7eb5f4)',borderRadius:25}}>
        <h2>{times[5].date}</h2>
        <p className="temperatureWeek">{times[5].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[5].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div> 
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'start', paddingTop: 30, paddingLeft: '25px'}}>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>{times[6].date}</h2>
            <p className="temperatureWeek">{times[6].temperature}<sup>o</sup></p>
            <img src={`http://openweathermap.org/img/wn/${times[6].icon}.png`} style={{marginTop: 20}} alt="temp"></img>
        </div>
        
    </SwiperSlide>
      
    </Swiper>
  );
};