import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Request from './Request';
import Response from './Response';
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
      <section className="http-message">
        <Request {...this.props.request}>
          <a onClick={this.toggleResponse}>
            { this.state.isShowingResponse ? 'Schowaj JSON' : 'Pokaż JSON' }
          </a>
        </Request>
        {
          this.state.isShowingResponse &&
          <Response {...this.props.response} />
        }
      </section>);
  }
}