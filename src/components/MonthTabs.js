import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { getMonthWeather} from '../store/actions/monthWeatherAction';
import React, {useState, useEffect} from 'react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination,]);

export default function SimpleCard () {

  const [loading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.monthWeather);

  


  useEffect(() => {
    dispatch(getMonthWeather());
  }, [dispatch]);

  let d = new Date();

  let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  let dayString = new Intl.DateTimeFormat('en', { weekday: 'long'}).format(d);

 

  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }

  return (
    <Swiper
      slidesPerView={1}
      observer = {true}
      observeSlideChildren = {true}
      observeParents = {true}
      pagination={{ clickable: true }}
      spaceBetween={10}
      style={{width:'100%',height:'100%'}}
    >
    <SwiperSlide style={{display:'flex', justifyContent: 'center'}}>
          <div id="horizontal" style={{fontWeight: '500', height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'start'}}>
            <div className="leftSide">
              <h3>{`${dayString} ${day}, ${month}`}</h3>
              <img className="monthIcon" src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="temp"></img>
            </div>
            <div style={{marginLeft: 80, marginTop: '20'}}>
              <p className="temperature" style={{fontSize: '2.0em',}}>{Math.round(data.current.temp)}<sup>o</sup></p>
              <p>{data.current.weather[0].main}</p>
              <p>{data.current.weather[0].description}.</p>
              <p style={{marginTop: 40}}>humidity: {Math.round(data.current.humidity)}%</p>
              <p>UV: {Math.round(data.current.uvi)}</p>
              <p>Dew point: {Math.round(data.current.dew_point)}<sup>o</sup>C</p>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-between'}}>
      <div id="horizontal" style={{height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p className="temperature">Coming Soon..</p>   
      </div>
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-between'}}>
      <div id="horizontal" style={{height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p className="temperature">Coming Soon..</p>   
      </div>
    </SwiperSlide>
    </Swiper>
  );
};