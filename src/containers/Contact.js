import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import MenuTrigger from './MenuTrigger'
import DocumentTitle from 'react-document-title'

const coords = {
  lat: 23.798475,
  lng: 120.457723
};

const params = {v: '3.exp', key: 'AIzaSyDWE3PSLDcqfL_5Hf86Cs05sTCazMETV6o'};

const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

class Contact extends React.Component {
  constructor() {
    super();
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
      this.forceUpdate();
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    const { menuVisible } = this.props
    return (
      <DocumentTitle title="兩姊妹堅果-連絡我們">
      <div className={('container page-fadein page-article container-menu-'+(menuVisible?'open':'closed'))}>
        <MenuTrigger/>
        <Gmaps
          width={menuVisible?window.innerWidth*0.75:window.innerWidth}
          height={window.innerHeight}
          lat={coords.lat}
          lng={coords.lng}
          zoom={17}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'兩姊妹堅果行\n05-5865398'}
            onCloseClick={this.onCloseClick}
          />
          <Circle
            lat={coords.lat}
            lng={coords.lng}
            radius={20}
            onClick={this.onClick}
          />
        </Gmaps>
      </div>
      </DocumentTitle>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
