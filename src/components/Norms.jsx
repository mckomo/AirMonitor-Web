import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HttpMessage from './HttpMessage/index'

const Norms = (props) => (
  <section>
    <header>
      <h3>Normy</h3>
    </header>
    <HttpMessage
      request={props.request}
      response={props.response}/>
    <table className='table'>
        <thead>
          <tr>
            { ['Nazwa pomiaru', 'Kod pomiaru', 'Wysokość normy', 'Poziom normy', 'Interwał pomiaru'].map(th => <th key={ th }>{ th }</th>) }
          </tr>
        </thead>
        <tbody>
        {props.norms.map(m => {
          return (
            <tr key={`${m.get('interval')}-${m.get('level')}-${m.get('subject').get('code')}`}>
              <td>{ m.get('subject').get('name') }</td>
              <td>{ m.get('subject').get('code') }</td>
              <td>{ m.get('value') }</td>
              <td>{ m.get('level') }</td>
              <td>{ m.get('interval') }</td>
            </tr>
          )
        })}
        </tbody>
      </table>
  </section>
);

export default Norms;
