import React, { Component } from 'react'
import {Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl'

class toggleCategorie extends Component {
   
    render () {
        return (
             <>
                <div>              
                 <div className="projects-grid">  
                            <Card shadow={5} style={{ minwidth: '450', margin: 'auto'}}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url() center / cover'}}></CardTitle>
                                <CardText>
                                    This is React.
                                </CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{color:"#fff"}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </div>                   
                 </div>
            </>
     )
    }
}

export default toggleCategorie
