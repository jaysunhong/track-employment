import React, { Component } from 'react';
import "./Process.css";
import Apply from "./Apply";
import Interview from "./Interview";
import Reject from "./Reject";
import Accept from "./Accept";
import Offer from "./Offer";
import JobList from "../items/JobList";
import JobListItems from '../items/JobListItems';

class Process extends Component {

    state = {
        processTitles: []
    }

    componentDidMount = () => {
        const processTitlesArr = [<Apply />, <Interview />, <Reject />, <Offer />, <Accept />];

        this.setState({
            processTitles: processTitlesArr
        })
    }
    
    render () {
        return (
            <div>
                <div className="row processTitles">
                        <div className="col m2">
                            <div className="empty"></div>
                        </div>
                        {this.state.processTitles.map(titles => {
                            return (
                                <div 
                                    className="col m2"
                                    key={titles.id}
                                >
                                    {titles}
                                </div>
                            )
                        })}
                </div>

                <JobList>
                    <JobListItems />
                </JobList>
            </div>
        )
    }
}

export default Process;