import React, { Component } from 'react';
import Api from '../../helper/BMSApi'
import withRedux from "next-redux-wrapper";
import Header from '../../components/header'

class events extends Component {
    static async getInitialProps({store, isServer, pathname, query}) {
        
        const events = await Api.getAllEvents()
            return {
                EvtData: events.results
            }
    }
    render() {
        console.log("Loading…",this.props);
        if (this.props.isLoading) {
            
            return <p>Loading…</p>
        }
        return (
            <div>
                 <div><Header /></div>
             { 
                this.props.EvtData.map(evt => 
                    <div key ={evt.release_date} className="evtCars">
                        <h4>{evt.title}</h4>
                    </div>
                )}
            </div>
        )
    }
   
}

export default events;