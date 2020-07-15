import React, { Component } from 'react';
import Imagesearch from './image_search/imagesearch';
import Imagelist from './imagelist/imagelist'

const API_KEY = '17478784-735f4f1d92940cc091944cc00'



export default class App extends Component {

  state = {
    images: []
  }

  handleGetRequest = async (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.searchValue.value
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({images: response.hits})
    console.log(this.state.images)
    
  }

  

  render() {

    

    return (
      <div className='app'>
        <Imagesearch handleGetRequest ={this.handleGetRequest} />
        
        <Imagelist images = {this.state.images} />
      </div>
    );
  }
}
