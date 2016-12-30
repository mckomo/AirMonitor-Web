import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Navigation from './Navigation/index'
import Header from './Header/index'
import StationsContainer from '../containers/StationsContainer'
import ChannelsContainer from '../containers/ChannelsContainer'
import MeasurementsContainer from '../containers/MeasurementsContainer'
import NormsContainer from '../containers/NormsContainer'
import Footer from './Footer/index'
import {connect} from 'react-redux'
import * as actions from '../actions'
import styles from '../main.scss'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
        <div className="container">
          <div className="row">
            <Navigation />
            <Header />
            <StationsContainer
              stations={this.props.stations}
              setStations={this.props.setStations}/>
            <ChannelsContainer
              channels={this.props.channels}
              setChannels={this.props.setChannels}/>
            <MeasurementsContainer
              measurements={this.props.measurements}
              setMeasurements={this.props.setMeasurements}/>
            <NormsContainer
              norms={this.props.norms}
              setNorms={this.props.setNorms}/>
            <Footer />
          </div>
        </div>)
  }
}

function mapState (state) {
  return {
    stations: state.get('stations'),
    channels: state.get('channels'),
    measurements: state.get('measurements'),
    norms: state.get('norms')
  }
}

export const AppContainer = connect(mapState, actions)(App)
