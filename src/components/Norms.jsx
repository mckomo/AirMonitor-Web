import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HttpMessage from './HttpMessage/index';

export default class Norms extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <section>
        <header>
          <h3>Normy</h3>
        </header>
        <HttpMessage
          request={this.props.request}
          response={this.props.response}/>
        <table className='table'>
            <thead>
              <tr>
                { ['Nazwa pomiaru', 'Kod pomiaru', 'Wysokość normy', 'Poziom normy', 'Interwał pomiaru'].map(th => <th key={ th }>{ th }</th>) }
              </tr>
            </thead>
            <tbody>
            {this.props.norms.map(m => {
              return (
                <tr key={m.get('id')}>
                  <td>{ m.get('subject').get('name') }</td>
                  <td>{ m.get('subject').get('code') }</td>
                  <td>{ m.get('value') }</td>
                  <td>{ m.get('level') }</td>
                  <td>{ m.get('interval') }</td>
                </tr>
              );
            })}
            </tbody>
          </table>
      </section>);
  }
}
