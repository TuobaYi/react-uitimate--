import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import FootGuide from './components/foot-guide/foot-guide'
import Home from './pages/home/home'
import Category from './pages/category/category'
import ShiWu from './pages/shi-wu/shi-wu'
import Cart from './pages/cart/cart'
import Personal from './pages/personal/personal'
import NotFound from './pages/not-found/not-found'
import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    const path = this.props.location.pathname
    const showPaths = ['/home', '/category', '/shiwu', '/cart']
    const showFooter = showPaths.indexOf(path)>=0
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/shiwu' component={ShiWu}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/personal' component={Personal}/>
          <Route component={NotFound}/>
        </Switch>
        {showFooter ? <FootGuide/> : null}
      </div>
    )
  }
}

export default withRouter(App)