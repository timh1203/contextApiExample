import React, { Component, Fragment } from 'react'
import './App.css'
const MyContext = React.createContext()

class MyProvider extends Component {
  state = {
    country: "USA",
    state: "Virginia",
    city: "Loudoun"
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        moveToTexas: () => this.setState({ state: "Texas", city: "Austin" })
      }}>
        {this.props.children}
      </MyContext.Provider >
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Country />
        </div>
      </MyProvider>
    )
  }
}

class Country extends Component {
  render() {
    return (
      <State />
    )
  }
}

class State extends Component {
  render() {
    return (
      <City />
    )
  }
}

class City extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <h1>{context.state.country}</h1>
            <h1>{context.state.state}</h1>
            <h1>{context.state.city}</h1>
            <button onClick={context.moveToTexas}>Let's move!</button>
          </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default App
