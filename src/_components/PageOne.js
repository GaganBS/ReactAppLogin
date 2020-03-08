import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const axios = require('axios');

class PageOne extends Component {
  constructor(){
    super();
    this.state = {
      imgURL: "",
      breed: [""],
      select: ""
    }
    const test = this.getBreed();

  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  getBreed = () => {
    const {breed} = this.state;
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        this.setState({
          breed: breed.concat(response.data.message)
        })
      })
      .catch(err => {
        console.log("error fetching list");
      });
  }

  render() {
    return (
      <div>
        <h1>All Dog Breeds</h1>
      </div>
    );
  }
}

export default PageOne
