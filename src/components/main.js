import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './aboutme'
import Contact from './contact'
import Landingpage from './landingpage'
import Projects from './projects'
import Resume from './resume'

 const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landingpage} />
            <Route  path='/aboutme' component={About} />
            <Route  path='/contact' component={Contact} />
            {/* <Route  path='/projects' component={Projects} /> */}
            <Route  path='/resume' component={Resume} />
        </Switch>
    )
}


export default Main;