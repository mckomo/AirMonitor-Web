import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HttpMessage from './HttpMessage/index'

export default class Channels extends React.Component {

  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <section>
        <header>
          <h3>Kanały</h3>
        </header>
        <HttpMessage
          request={this.props.channelsRequest}
          response={this.props.channelsResponse}/>
        <table className='table'>
          <thead>
            <tr>
              {[
                'Kod kanału',
                'Nazwa pomiaru',
                'Kod pomiaru',
                'Jednostka pomiaru',
                'Nazwa stacji',
                'Kod stacji'
              ].map(th => {
                return (<th key={th}>{ th }</th>)
              })}
            </tr>
          </thead>
          <tbody>
          {this.props.channels.map(ch => {
            return (<tr key={ch.get('code')}>
              <td>{ ch.get('code') }</td>
              <td>{ ch.get('subject').get('name') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td dangerouslySetInnerHTML={{ __html: ch.get('subject').get('unit') }} />
              <td>{ ch.get('station').get('name') }</td>
              <td>{ ch.get('station').get('code') }</td>
            </tr>)
          })}
          </tbody>
        </table>
      </section>)
  }

}
