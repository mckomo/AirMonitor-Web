import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import json from 'format-json';
import './styles.scss';

export default class HttpMessage extends React.Component {

  state = {
    isShowingResponse: false
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  toggleResponse = () => {
    this.setState({isShowingResponse: !this.state.isShowingResponse});
  }

  render() {
    return (
      <section className="request">
        <pre className="signature-wrapper">
          <div className="signature">
            <span>{this.props.method} {this.props.url}</span>
          </div>
          <div className="extra">
            { this.props.children }
          </div>
        </pre>
      </section>);
  }
}