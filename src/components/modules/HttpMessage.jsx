import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import json from 'format-json';

export default class HttpMessage extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <section className="http-message">
        <section className="request">
          <pre className="signature">
              <span>{ this.props.request.method} { this.props.request.url }</span>
          </pre>
        </section>
        <section className="response">
          <pre className="body">
              <code className="json">{ this.props.response.body }</code>
          </pre>
        </section>
      </section>);
  }
}