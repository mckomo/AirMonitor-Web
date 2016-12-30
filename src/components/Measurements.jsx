import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HttpMessage from './HttpMessage/index'
import Chart from './Chart'
import dateFormat from 'dateformat'

export default class Measurements extends React.Component {

  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getChartData () {
    return this.props.measurements
      .map(m => m.get('value'))
      .reverse()
      .toArray()
  }

  getChartLabels () {
    return this.props.measurements
      .map(m => m.get('time'))
      .map(t => new Date(t))
      .map(d => dateFormat(d, 'd mmm H:MM'))
      .reverse()
      .toArray()
  }

  render () {
    return (
      <section>
        <header>
          <h3>Pomiary</h3>
        </header>
        <HttpMessage
          request={this.props.measurementsRequest}
          response={this.props.measurementsResponse}/>
        <Chart title="Pamiar PM10" data={this.getChartData()} labels={this.getChartLabels()} />
      </section>)
  }
}
