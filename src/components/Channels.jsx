import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HttpMessage from './modules/HttpMessage';

export default class Channels extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

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
            {this.props.channels.map(ch => {
              const subject_code = ch.get('subject').get('code');

              return (
                <th key={ subject_code }>{ subject_code }</th>);
            })}
          </tr>
          </thead>
          <tbody>
          {this.props.channels.map(ch => {
            return (<tr key={ch.get('code')}>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
              <td>{ ch.get('subject').get('code') }</td>
            </tr>);
          })}
          </tbody>
        </table>
      </section>);
  }


}