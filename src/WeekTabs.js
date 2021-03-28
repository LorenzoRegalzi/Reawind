import SwiperCore, { Pagination } from 'swiper';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination,]);

export default () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{width:'100%',height:'100%',}}
    >
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
    <SwiperSlide style={{display:'flex', justifyContent: 'space-around', justifyContent: 'space-evenly', paddingTop: 30}}>
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
    <SwiperSlide style={{display:'flex', justifyContent: 'space-around', justifyContent: 'space-evenly', paddingTop: 30}}>
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