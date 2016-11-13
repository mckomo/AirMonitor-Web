import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import GoogleMapsLoader from 'google-maps';
import classNames from 'classnames';
import Settings from '../../settings';
import { loadGoogleMap } from './googleMapLoader';

GoogleMapsLoader.KEY = Settings.secrets.googleApiKey;

require('../../../styles/modules/map.scss');

export default class GoogleMap extends React.Component {

  static defaultProps = {
    center: {
      latitude: 50.0647,
      longitude: 19.945
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.mountMap()
  }

  componentDidUpdate() {
    this.mountMap()
  }

  getClassNames() {
    return classNames({
      map: true,
      strip: true,
      full: this.props.markers.size > 0
    });
  }

  mountMap() {
    const params = {
      center: {
        lat: this.props.center.latitude,
        lng: this.props.center.longitude
      },
      zoom: this.props.zoom,
      wrapper: this._wrapper,
      markers: this.props.markers,
    };

    loadGoogleMap(params);
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div ref={ref => this._wrapper = ref } className='wrapper'/>
      </div>);
  }
}
