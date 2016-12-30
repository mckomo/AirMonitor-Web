import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HttpMessage from './HttpMessage/index'
import Map from './Map/index'

export default class Stations extends React.Component {

  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <section>
        <header>
          <h3>Stacje</h3>
        </header>
        <HttpMessage
          request={this.props.stationsRequest}
          response={this.props.stationsResponse}/>
        <Map markers={this.props.stations}/>
      </section>)
  }

}
