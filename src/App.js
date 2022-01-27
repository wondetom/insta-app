import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/404Page/404Page';
// const pageLogin = <h1>Login</h1>
// const pageExp = <h1>Expenses</h1>
// const pageInv = <h1>Invoice</h1>
class App extends React.Component{
  state={
    isLog:false
  }

  handleLogin = (isLog) =>{
    this.setState({isLog})
    console.log(this.state.isLog)
  }
  render(){
    const {isLog} = this.state
    return (
      <div>
        <Switch>

          {
            !isLog?
            <Route path="/" render={() =><Login isLogin={this.handleLogin}/>}/>
            :
            <Route path='/' render={() => <Home handleLogged={this.handleLogin}/>}/>
            
          /* <Route path="/" render={() => !isLog ? <Login isLog={this.handleLogin}/>: <Home handleLogged={this.handleLogin}/>} />
          <Route path="/explore" component={<Explore />} /> */
          }
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    )
  }

}
export default App;
