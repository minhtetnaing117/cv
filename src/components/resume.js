import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import PersonalDetail from './personalDetail'
import PersonalCertification from './PesonalCertification'
import Skill from './skills'
import imgs from '../images.jpg'

class Resume extends Component {
    render () {
        return (
            <div>
                <Grid >
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                            src={imgs}
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Min Htet Naing</h2>
                        <h4 style={{color: 'grey'}}>Odoo Developer</h4>
                        {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>No.4, Kyun Taw Street, Way Lu Win Quater, Sanchaung Township, Yangon</p>
                        <h5>Phone</h5>
                        <p>(+959) 790-270-945</p>
                        <h5>Email</h5>
                        <p>minhtetnaing117@gmail.com</p>
                        {/* <h5>Web</h5>
                        <p>mywebsite.com</p> */}
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Personal Details</h2>


                        <PersonalDetail Gender="Gender" GenderName="Male"
                                        Date_of_Birth="Date of Birth" Birth="23-Aug-1990"
                                        Marital_status="Marital status" status="Single"
                                        Nationally="Nationally" Nationallys="Myanmar"
                                        Religious="Religious" Religiouss="Buddhist" 
                                        Race="Race" Races="Burmese"
                                        />

                        <hr style={{borderTop: '3px soild #e22947'}}/>
                        <h2>Education</h2>


                        <Education 
                        startYear={2010} endYear={2011} schoolName="West Yangon Technology University"
                        schoolDescription="Bachelor of Technology(Mining)"
                        />

                        <Education 
                            startYear={2011} endYear={2012} schoolName="West Yangon Technology University"
                            schoolDescription="Bachelor of Engineering(Mining)"
                            />

                        <hr style={{borderTop: '3px soild #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2012}
                        endYear={2014}
                        jobName="Mining"
                        Company="National Property Company"
                        position="Supervisor"
                        />

                       

                        <Experience 
                        startYear={2020}
                        endYear={'until now'}
                        jobName="Odoo Develpoer"
                        Company="KanaungMyanmarSoftware"
                        position='Odoo Developer'
                        />

                        <hr style={{borderTop: '3px soild #e22947'}}/>
                        <h2>Professional Certification</h2>

                        
                        <PersonalCertification WISE_College="WISE College (General English 4 skills)"
                                                CPM="Certified Professional Manager (CPM)"
                                                KMD="I-Office Basic(KMD)"
                                                NetworkBasic="Certified Network Engineering (Basic)"
                                                WebEssentialCourse="Web Essential Course"/>

                        <hr style={{borderTop: '3px soild #e22947'}}/>
                        <h2>Skills</h2>
                              <Skill
                                report="Reporting daily and monthly lists"
                                ms="Great Proficiency in MS Excel Word and Power Point"
                                quality="Have worked in a team quality"
                                qualities="Worked with accountability and capable of leadership qualities"
                                aptitude="Resourcefulness and troubleshooting aptitude"
                                services="Customer services (external / internal)"
                                languages="Knowledge of Coding languages (e.g. Python, PHP, HTML, CSS, JavaScript, React, React Native)"
                                Mapping="Object-Relational Mapping (ORM) Django, Bootstrap"
                                databases="Experience with databases (e.g. MySQL, PostgreSQL, SQLite)"
                                Familiar="Familiar with Odoo(ERP), Heroku, Git"
                              />
                        
                   
                    </Cell>
                </Grid>
            </div>
        )
    }
   
}

export default Resume
