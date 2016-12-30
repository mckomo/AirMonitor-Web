import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import rest from 'rest';
import json from 'format-json';

import Norms from '../components/Norms';
import settings from '../settings'

export default class NormsContainer extends React.Component {

  static defaultProps = {
    request: {
      method: 'GET',
      url: `${settings.host}/api/v1/norms`
    }
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getRequest() {
    return this.props.request;
  }

  getResponse() {
    return {
      body: json.plain(this.props.norms)
    };
  }

  componentDidMount() {
    rest(this.props.request.url)
      .then(response => {
        return JSON.parse(response.entity);
      })
      .then(norms => {
        this.props.setNorms(norms);
      });
  }

  render() {
    return (
      <Norms { ... this.props }
        request={this.getRequest()}
        response={this.getResponse()} />);
  }

}
