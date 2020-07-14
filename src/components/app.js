import React, { Component } from 'react';

const API_KEY = '17478784-735f4f1d92940cc091944cc00'

const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`

export default class App extends Component {

  state = {
    images: []
  }

  handleGetRequest = async () => {
    const request = await fetch(url)
    const response = await request.json()
    this.setState({images: response.hits})
    console.log(response.hits)
  }

  componentDidMount() {
    this.handleGetRequest()
  }

  render() {

    

    return (
      <div className='app'>
        <div>App component</div>
      </div>
    );
  }
}
