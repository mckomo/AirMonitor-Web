import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import rest from 'rest';
import json from 'format-json';

import Measurements from '../components/Measurements';
import settings from '../settings'


export default class MeasurementsContainer extends React.Component {

  static defaultProps = {
    request: {
      method: 'GET',
      url: `${settings.host}/api/v1/channels/MAL005-PM10/measurements`
    }
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getMeasurementsRequest() {
    return this.props.request;
  }

  getMeasurementsResponse() {
    return {
      body: json.plain(this.props.measurements)
    };
  }

  componentDidMount() {
    rest(this.props.request.url)
      .then(response => {
        return JSON.parse(response.entity);
      })
      .then(measurements => {
        this.props.setMeasurements(measurements);
      });
  }

  render() {
    return (
      <Measurements { ... this.props }
        measurementsRequest={this.getMeasurementsRequest()}
        measurementsResponse={this.getMeasurementsResponse()} />);
  }

}
