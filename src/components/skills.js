import React, { Component } from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

class Skill extends Component{
    render(){
        return (
            <Grid>
                
                <Cell col={4}>
                       
                </Cell>
                <Cell col={8}>
                <p style={{marginTop:'0px'}}>{this.props.report}</p>
                          <p>{this.props.ms}</p>
                          <p>{this.props.quality}</p>
                          <p>{this.props.qualities}</p>
                          <p>{this.props.aptitude}</p>
                          <p>{this.props.services}</p>
                          <p>{this.props.languages}</p>
                          <p>{this.props.Mapping}</p>
                          <p>{this.props.databases}</p>
                          <p>{this.props.Familiar}</p>
                         
                </Cell>
            </Grid>
        )
    }
    
}

export default Skill
