import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './Header'
import StationsContainer from './StationsContainer';
import ChannelsContainer from './ChannelsContainer';
import MeasurementsContainer from './MeasurementsContainer';
import {connect} from 'react-redux';
import * as actions from '../actions'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <div>
        <Header />
        <StationsContainer
          stations={this.props.stations}
          setStations={this.props.setStations}/>
      </div>);
      
      // return (
      //   <div>
      //     <Header />
      //     <StationsContainer
      //       stations={this.props.stations}
      //       setStations={this.props.setStations}/>
      //     <ChannelsContainer
      //       channels={this.props.channels}
      //       setChannels={this.props.setChannels}/>
      //     <MeasurementsContainer
      //       measurements={this.props.measurements}
      //       setMeasurements={this.props.setMeasurements}/>
      //   </div>);
  }

}

function mapState(state) {
  return {
    stations: state.get('stations'),
    channels: state.get('channels'),
    measurements: state.get('measurements'),
  };
}

export const AppContainer = connect(mapState, actions)(App);
