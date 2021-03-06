import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                          <p>{this.props.Company}</p>
                          <p>{this.props.position}</p>
                </Cell>
               </Grid>
            </div>
        )
    }
    
}

export default Experience
