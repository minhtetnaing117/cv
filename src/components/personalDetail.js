import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

class PersonalDetail extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                        <p>{this.props.Gender}</p>
                        <p>{this.props.Date_of_Birth}</p>
                        <p>{this.props.Marital_status}</p>
                        <p>{this.props.Nationally}</p>
                        <p>{this.props.Religious}</p>
                        <p>{this.props.Race}</p>
                        <p>{this.props.N_R_C}</p>
                </Cell>
                <Cell col={8}>
                <p style={{marginTop:'0px'}}>{this.props.GenderName}</p>
                          <p>{this.props.Birth}</p>
                          <p>{this.props.status}</p>
                          <p>{this.props.Nationallys}</p>
                          <p>{this.props.Religiouss}</p>
                          <p>{this.props.Races}</p>
                          <p>{this.props.N_R_Cs}</p>
                </Cell>
               </Grid>
            </div>
        )
    }
    
}

export default PersonalDetail
