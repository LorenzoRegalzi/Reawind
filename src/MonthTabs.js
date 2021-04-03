import SwiperCore, { Pagination } from 'swiper';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayWeather} from './store/actions/weatherActions';
import React, {useState, useEffect} from 'react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination,]);

export default function SimpleCard () {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);

  


  useEffect(() => {
    dispatch(getFiveDayWeather('Milan'));
  }, [dispatch]);

 

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
          <div id="horizontal" style={{height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'start'}}>
            <div style={{marginLeft: 30}}>
              <h3>{data.list[0].dt_txt}</h3>
              <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`} alt="temp"></img>
            </div>
            <div style={{marginLeft: 80}}>
              <p>{data.list[0].main.temp}</p>
              <p>{data.list[0].weather[0].main}</p>
              <p>{data.list[0].weather[0].desc}</p>
              <p style={{marginTop: 40}}>humidity: {data.list[0].main.humidity}</p>
              <p>UV: 3</p>
              <p>Dew point: 3 C</p>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-between'}}>
    <div id="horizontal" style={{height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'start'}}>
            <div style={{marginLeft: 30}}>
              <h3>Fri, 25 Sett</h3>
              <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
            </div>
            <div style={{marginLeft: 80}}>
              <p>10</p>
              <p>strong Wind</p>
              <p>The high will be 14 C, the low will be 8 C</p>
              <p style={{marginTop: 40}}>Humidity: 55%</p>
              <p>UV: 3</p>
              <p>Dew point: 3 C</p>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-between'}}>
    <div id="horizontal" style={{height:'80%',color:'#FFFFFF',width:'90%',margin:'6%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25,display:'flex', justifyContent: 'start'}}>
            <div style={{marginLeft: 30}}>
              <h3>Fri, 25 Sett</h3>
              <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
            </div>
            <div style={{marginLeft: 80}}>
              <p>10</p>
              <p>strong Wind</p>
              <p>The high will be 14 C, the low will be 8 C</p>
              <p style={{marginTop: 40}}>Humidity: 55%</p>
              <p>UV: 3</p>
              <p>Dew point: 3 C</p>
            </div>
          </div>
    </SwiperSlide>
    </Swiper>
  );
};