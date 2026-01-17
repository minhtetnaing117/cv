import { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

class PersonalCertification extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                       
                </Cell>
                <Cell col={8}>
                <p style={{marginTop:'0px'}}>{this.props.WISE_College}</p>
                          <p>{this.props.CPM}</p>
                          <p>{this.props.KMD}</p>
                          <p>{this.props.NetworkBasic}</p>
                          <p>{this.props.WebEssentialCourse}</p>
                          <p>{this.props.PWDC}</p>
                          <p>{this.props.RDC}</p>
                          <p>{this.props.PDC}</p>
                          <p>{this.props.WE}</p>
                         
                </Cell>
               </Grid>
            </div>
        )
    }
    
}

export default PersonalCertification
