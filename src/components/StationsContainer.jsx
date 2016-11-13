import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import rest from 'rest';
import json from 'format-json';

import Stations from './Stations';
import settings from '../settings'

export default class StationsContainer extends React.Component {

  static defaultProps = {
    request: {
      method: 'GET',
      url: `${settings.host}/api/v1/stations`
    }
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    rest(this.props.request.url)
      .then(response => {
        return JSON.parse(response.entity);
      })
      .then(stations => {
        this.props.setStations(stations);
      });
  }

  getStationsRequest() {
    return this.props.request;
  }

  getStationsResponse() {
    return {
      body: json.plain(this.props.stations)
    };
  }

  render() {
    return (
      <Stations
        {... this.props}
        stationsRequest={this.getStationsRequest()}
        stationsResponse={this.getStationsResponse()}/>);
  }

}
