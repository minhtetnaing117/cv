import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import { FaGitAlt } from "react-icons/fa";

class Landingpage extends Component {
    render () {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12} >
                        {/* <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH9wbHfLKLZ3cX50Atk1Imdb8VBR0erRJiA&usqp=CAU'
                            alt='avatar'
                            className='avatar-img'
                        /> */}

                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr />

                            <p>HTML/CSS | Bootstarp | JavaScript | React | React Native | Python | Odoo | Jquery | Firebase | heroku | Git </p><br/>
                            {/* <p>To work as developer in a company with world leading technology that provide the opportunities for
                    continuous learning new things and to get a challenge role.</p>  */}

                            <div className='social-links'>
                                <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                    <FaGitAlt className='git-link'/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
   
}

export default Landingpage
