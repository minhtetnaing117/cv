import React, { Component } from 'react'
import { CardTitle, CardActions, Card, Grid, Cell } from 'react-mdl'
import C1 from '../assets/C1.jpg'
import KMD from '../assets/KMD.jpg'
import LU from '../assets/LU.jpg'
import PWDC from '../assets/PWDC.jpg'
import PY from '../assets/PY.jpg'
import RDC from '../assets/RDC.jpg'
import USA from '../assets/USA.jpg'
import WEC from '../assets/WEC.jpg'
import WISE from '../assets/WISE.jpg'
import YIC from '../assets/YIC.jpg'

class Certification extends Component {
    render () {
        return (
            <div className="about-text">
               <h1>Certification Card</h1>

               <hr />
               <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${C1}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                C1.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${KMD}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                KMD.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    
                </Grid>
                


                <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${LU}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                LU.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${PWDC}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                PWDC.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    
                </Grid>


                <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${PY}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                PY.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${RDC}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                RDC.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    
                </Grid>

                <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${USA}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                USA.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${WEC}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                WEC.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    
                </Grid>



                <Grid className="demo-grid-2">
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${WISE}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                WISE.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${YIC}) center / cover`, margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                YIC.jpg
                            </span>
                        </CardActions>
                    </Card>
                    </Cell>

                    
                </Grid>
               

            </div>
        )
    }
   
}

export default Certification
