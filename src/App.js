import React, { Component } from 'react';
import './App.css';
import WidgetList from './Components/Widget/WidgetList';
import config from './config';

const API_ROOT = `${config.base}jsonapi/`;
const CONTENT_TYPE = `widget`;
const LIST_URL = `${API_ROOT}node/${CONTENT_TYPE}?include=field_image&fields[file--file]=uri,url`;

class App extends Component {

  constructor() {
    super();
    this.state = { data: null };
    this.loadWidgets = this.loadWidgets.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    this.loadWidgets();
  }

  loadWidgets() {
    // Fetch Destinations.
    fetch(LIST_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Widgets Failed', err));
  }

  updateData(responseData) {
    this.setState({data: responseData.data});
  }

  render() {
    return (
      <div className="App">
        <WidgetList
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;