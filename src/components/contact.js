import { Component } from 'react'
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'
import { FaPhoneSquare,FaEnvelopeSquare } from "react-icons/fa";

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={12}> 
                   {/* <h2>Min Htet Naing</h2> */}
                    {/* <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH9wbHfLKLZ3cX50Atk1Imdb8VBR0erRJiA&usqp=CAU"
                    alt="avatar"
                    style={{height: '250px'}}
                    /> */}
                    {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}
                    {/* </Cell> */}
                   {/* <Cell col={6}> */}
                       <h2>Contact Me</h2>
                       <hr/>

                       <div className="contact-list">
                       <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                               <FaPhoneSquare  className="phoneSquare"/> (+959) 790-270-945</ListItemContent>
                        </ListItem>
                        
                        <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                               <FaEnvelopeSquare  className="phoneSquare"/>  minhtetnaing117@gmail.com</ListItemContent>
                        </ListItem>
                        </List>
                       </div>
                      

                   </Cell>
               </Grid>
            </div>
        )
    }
   
}

export default Contact
