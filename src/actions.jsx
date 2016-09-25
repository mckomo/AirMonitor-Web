export function setStations(stations) {
  return {
    type: 'SET_STATIONS',
    stations: stations
  }
}

export function setChannels(channels) {
  return {
    type: 'SET_CHANNELS',
    channels: channels
  }
}

export function setMeasurements(measurements) {
  return {
    type: 'SET_MEASUREMENTS',
    measurements: measurements
  }
}