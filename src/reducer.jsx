import {Map, List, fromJS} from 'immutable';

function setState(state, nextState) {
  return state.merge(nextState);
}

function setStations(state, stations = []) {
  return state.set('stations', fromJS(stations));
}

function setChannels(state, channels = []) {
  return state.set('channels', fromJS(channels));
}

function setMeasurements(state, measurements = []) {
  return state.set('measurements', fromJS(measurements));
}

function setNorms(state, norms = []) {
  return state.set('norms', fromJS(norms));
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_STATIONS':
      return setStations(state, action.stations);
    case 'SET_CHANNELS':
      return setChannels(state, action.channels);
    case 'SET_MEASUREMENTS':
      return setMeasurements(state, action.measurements);
    case 'SET_NORMS':
      return setNorms(state, action.norms);
  }

  return state;
}