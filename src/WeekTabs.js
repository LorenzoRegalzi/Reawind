import SwiperCore, { Pagination } from 'swiper';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayWeather} from './store/actions/weatherActions';
import React, {useState, useEffect} from 'react';



// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination,]);

export default function SimpleCard()  {

const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);

  //console.log(data);


  useEffect(() => {
    dispatch(getFiveDayWeather('Milano'));
  }, [dispatch]);

 

  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }

  console.log(data)

  const times = [];

    for (let i = 0; i < 40; i+8) {

      let temperature = data.list[i].main.temp;

      let aroundTemperature = Math.round(temperature);

      var onlyHours = new Date(data.list[i].dt_txt).getHours();

      var ampm = onlyHours >= 12 ? 'p.m.' : 'a.m.';

      onlyHours = onlyHours % 12;

      onlyHours = onlyHours ? onlyHours : 12;

      let formatHours = onlyHours + ' ' + ampm;
      
      times.push({date : formatHours , temperature : aroundTemperature});
    }

    console.log(times + 'ehy')


  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{width:'100%',height:'100%',}}
    >
      <SwiperSlide style={{display:'flex', justifyContent: 'space-evenly', paddingTop: 30}}>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>{data.list[0].dt_txt}</h2>
            <p>{data.list[0].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25}}>
        <h2>{data.list[8].dt_txt}</h2>
            <p>{data.list[8].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage:'linear-gradient(to right, #75a3ef, #76a4ef, #76a6f0, #77a7f0, #78a8f0, #79aaf0, #79abf1, #7aadf1, #7baff2, #7cb1f3, #7db3f3, #7eb5f4)',borderRadius:25}}>
        <h2>{data.list[16].dt_txt}</h2>
            <p>{data.list[16].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`} alt="temp"></img>
        </div> 
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-evenly', paddingTop: 30}}>
    <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>{data.list[22].dt_txt}</h2>
            <p>{data.list[22].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25}}>
        <h2>{data.list[30].dt_txt}</h2>
            <p>{data.list[30].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}.png`} alt="temp"></img>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage:'linear-gradient(to right, #75a3ef, #76a4ef, #76a6f0, #77a7f0, #78a8f0, #79aaf0, #79abf1, #7aadf1, #7baff2, #7cb1f3, #7db3f3, #7eb5f4)',borderRadius:25}}>
        <h2>{data.list[39].dt_txt}</h2>
        <p>{data.list[39].main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png`} alt="temp"></img>
        </div> 
    </SwiperSlide>
    <SwiperSlide style={{display:'flex', justifyContent: 'space-evenly', paddingTop: 30}}>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6a8eeb, #6b90ec, #6c93ec, #6d95ed, #6e97ed, #6f99ed, #709bee, #719dee, #729fef, #73a1ef, #75a2f0, #76a4f0)',borderRadius:25}}>
            <h2>Saturday</h2>
            <p>20</p>
            <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage: 'linear-gradient(to right, #6d93ec, #6e95ed, #6e98ed, #6f9aee, #709cee, #719eee, #72a0ef, #73a2ef, #74a4ef, #76a6f0, #77a8f0, #79aaf0)',borderRadius:25}}>
        <h2>Saturday</h2>
            <p>20</p>
            <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
        </div>
        <div id="horizontal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'85%', color:'#FFFFFF', width:'28%',backgroundImage:'linear-gradient(to right, #75a3ef, #76a4ef, #76a6f0, #77a7f0, #78a8f0, #79aaf0, #79abf1, #7aadf1, #7baff2, #7cb1f3, #7db3f3, #7eb5f4)',borderRadius:25}}>
        <h2>Saturday</h2>
            <p>20</p>
            <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
        </div> 
    </SwiperSlide>
      
    </Swiper>
  );
};