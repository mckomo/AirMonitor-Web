import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HttpMessage from './modules/HttpMessage';

export default class Measurements extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <section>
        <header>
          <h3>Pomiary</h3>
        </header>
        <HttpMessage
          request={this.props.measurementsRequest}
          response={this.props.measurementsResponse}/>
      </section>);
  }
}