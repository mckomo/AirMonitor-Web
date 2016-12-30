import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import rest from 'rest';
import json from 'format-json';

import Channels from '../components/Channels';
import settings from '../settings'

export default class ChannelsContainer extends React.Component {

  static defaultProps = {
    request: {
      method: 'GET',
      url: `${settings.host}/api/v1/stations/MAL005/channels`
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
      .then(channels => {
        this.props.setChannels(channels);
      });
  }

  getChannelsRequest() {
    return this.props.request;
  }

  getChannelsResponse() {
    return {
      body: json.plain(this.props.channels)
    };
  }

  render() {
    return (
      <Channels
        {...this.props}
        channelsRequest={this.getChannelsRequest()}
        channelsResponse={this.getChannelsResponse()} />);
  }

}
