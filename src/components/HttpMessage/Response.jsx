import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import json from 'format-json';

export default class Response extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <section className="response2">
        <pre className="response">
          <code>{ this.props.body }</code>
        </pre>
      </section>);
  }
}