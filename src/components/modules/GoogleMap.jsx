import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import Settings from '../../settings';
import GoogleMapsLoader from 'google-maps';

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

  getClassNames() {
    return classNames({
      map: true,
      strip: true,
      full: this.props.markers.size > 0
    });
  }

  mountMap() {
    const center = {lat: this.props.center.latitude, lng: this.props.center.longitude};
    const zoom = this.props.zoom;

    GoogleMapsLoader.load(google => {

      const map = new google.maps.Map(this._wrapper, {
        center: center,
        zoom: zoom
      });

      this.props.markers.forEach(params => {

        const position = {lat: params.get('latitude'), lng: params.get('longitude')}

        const marker = new google.maps.Marker({
          position: position,
          map: map,
        });

        const infowindow = new google.maps.InfoWindow({
           content: `<strong>${params.get('name')}</strong>`
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

      });

    });
  }

  render() {

    this.mountMap();

    return (
      <div className={this.getClassNames()}>
        <div ref={ref => this._wrapper = ref } className='wrapper'/>
      </div>);
  }
}
