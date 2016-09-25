import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        stations: [
          {id: 1, name: 'Station 1'},
          {id: 2, name: 'Station 2'},
          {id: 3, name: 'Station 3'}
        ]
      }
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      stations: [
        {id: 1, name: 'Station 1'},
        {id: 2, name: 'Station 2'},
        {id: 3, name: 'Station 3'}
      ]
    }));
  });

  it('handles SET_STATIONS', () => {

    const state = Map();
    const action = {
      type: 'SET_STATIONS',
      stations: [
          {id: 1, name: 'Station 1'},
          {id: 2, name: 'Station 2'},
          {id: 3, name: 'Station 3'}
      ]
    };

    const nextState = reducer(state, action);
    const stations = nextState.get('stations');

    expect(stations).to.equal(fromJS([
        {id: 1, name: 'Station 1'},
        {id: 2, name: 'Station 2'},
        {id: 3, name: 'Station 3'}
      ]));
  });

  it('handles SET_CHANNELS', () => {

    const state = Map({
      channels: List()
    });
    const action = {
      type: 'SET_CHANNELS',
      channels: [
        {id: 1, name: 'Channel 1'},
        {id: 2, name: 'Channel 2'},
        {id: 3, name: 'Channel 3'}
      ]
    };

    const nextState = reducer(state, action);
    const channels = nextState.get('channels');

    expect(channels).to.equal(fromJS([
      {id: 1, name: 'Channel 1'},
      {id: 2, name: 'Channel 2'},
      {id: 3, name: 'Channel 3'}
    ]));

  });

  it('handles SET_MEASUREMENTS', () => {

    const state = Map({
      measurements: List()
    });
    const action = {
      type: 'SET_MEASUREMENTS',
      measurements: [
        { time: '2016-06-01 12:00', value: 100.0 },
        { time: '2016-06-01 13:00', value: 100.0 },
        { time: '2016-06-01 14:00', value: 100.0 }
      ]
    };

    const nextState = reducer(state, action);
    const measurements = nextState.get('measurements');

    expect(measurements).to.equal(fromJS([
      { time: '2016-06-01 12:00', value: 100.0 },
      { time: '2016-06-01 13:00', value: 100.0 },
      { time: '2016-06-01 14:00', value: 100.0 }
    ]));

  });


});
