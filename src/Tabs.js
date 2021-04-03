import React, { Component } from 'react';
import WeekTabs from './WeekTabs';
import MonthTabs from './MonthTabs';
import './App.css';



class Tabs extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showInfo : false
        }
    }
    firstTab = () => { 
        this.setState({ showInfo : false })
        
    }
    secondTab = () => { 
        this.setState({ showInfo : true })
        
    }
    render() {
        return (
        <React.Fragment> 
            <div  style={{height:'20%',width:'100%', display:'flex',}}>
                <div  style={{height:'100%',width:'75%',backgroundColor:'#F1F1F1;',display:'flex', }}>
                    <div  style={{height:'100%',width:'50%',backgroundColor: "#FFFFFF", borderTopLeftRadius:25,}}>
                        <div   onClick={this.firstTab} style={{height:'100%',width:'100%',backgroundColor: this.state.showInfo ? "#FFFFFF" : "green",backgroundImage: !this.state.showInfo ? 'linear-gradient(to right, #5982ea, #5a83ea, #5a84ea, #5b84ea, #5c85ea, #5c86ea, #5d86eb, #5d87eb, #5d88eb, #5e89ec, #5e8aec, #5f8bec)': "none", borderTopLeftRadius:25,borderTopRightRadius:25, display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                            <h2 style={{color: this.state.showInfo ? "black" : "white"}}>This week</h2>
                        </div>
                    </div>
                    <div  style={{height:'100%',width:'50%',backgroundColor: "#FFFFFF",borderTopRightRadius:25}}>
                        <div  onClick={this.secondTab } style={{height:'100%',width:'100%',backgroundColor:this.state.showInfo ? "green" : "#FFFFFF", backgroundImage: this.state.showInfo ? 'linear-gradient(to right, #5f8bec, #5f8cec, #5f8dec, #608deb, #608eeb, #608feb, #6190ec, #6191ec, #6192ec, #6294ed, #6295ed, #6396ed)': "none",borderTopLeftRadius:25,borderTopRightRadius:25, display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                            <h2 style={{color: this.state.showInfo ? "white" : "black"}}>This month</h2>
                        </div>
                    </div>
                </div>
                <div  style={{height:'100%',width:'25%',backgroundColor:'#F1F1F1;'}}>
                    
                </div>
            </div>
            <div  style={{height:380,width:'100%',backgroundColor: this.state.showInfo ? "#FFFFFF" : "green",borderBottomLeftRadius:25,borderBottomRightRadius:25,borderTopRightRadius:25, backgroundImage: !this.state.showInfo ?  ' linear-gradient(to right, #5981ea, #5a84eb, #5c87eb, #5d89ec, #5f8cec, #608fec, #6192ed, #6395ed, #6499ee, #669cef, #68a0ef, #6aa3f0)': "none"}}>
                <div  style={{ display: this.state.showInfo ? "none" : "block",height:'100%'}}>
                    <WeekTabs></WeekTabs>
                </div>
                <div  style={{ display: this.state.showInfo ? "block" : "none" ,height:'100%',width:'100%',backgroundImage: this.state.showInfo ?  'linear-gradient(to right, #5981ea, #5a84eb, #5c87eb, #5d89ec, #5f8cec, #608fec, #6192ed, #6395ed, #6499ee, #669cef, #68a0ef, #6aa3f0)': "none",borderBottomLeftRadius:25,borderBottomRightRadius:25,borderTopRightRadius:25,borderTopLeftRadius:25}}>
                    <div  style={{ display: !this.state.showInfo ? "none" : "block", height:'100%' }}>
                        <MonthTabs></MonthTabs>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
  };

  export default Tabs;


