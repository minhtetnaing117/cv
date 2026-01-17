import { Component } from 'react'
import {Grid, Cell, Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton} from 'react-mdl'



class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};

        
    }
 
    render () {
        return (
                 <>
                 <div>
                    <Grid className="demo-grid-1">
                        <Cell col={4}>
                    <div className="projects-grid">  
                        <Card shadow={5} style={{ minwidth: '450', margin: 'auto'}}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}></CardTitle>
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
                     </div> </Cell>
                        <Cell col={4}>
                    <div className="projects-grid">  
                        <Card shadow={5} style={{ minwidth: '450', margin: 'auto'}}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}></CardTitle>
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
                     </Cell>
                        <Cell col={4}> 
                        <div className="projects-grid">  
                             <Card shadow={5} style={{ minwidth: '450', margin: 'auto'}}>
                               <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}></CardTitle>
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
                     </Cell>
                    </Grid>
                </div>
                        
                     
                 </>
             )
         }
   
        }

export default Projects
