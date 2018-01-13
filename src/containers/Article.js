import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DocUrl, ImageUrl } from '../actions'
import MenuTrigger from './MenuTrigger'
import { Row } from 'react-bootstrap'
/*global FB*/



const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
  dashboard: state.dashboard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      DocBody: "",
      FbAjax: '<script type="text/javascript"> FB.XFBML.parse(); </script>'
    }
    this.loadDoc = this.loadDoc.bind(this);
  }

  loadDoc(fileId) {
    fetch(DocUrl(fileId))
    .then(response => response.text())
    .then(text => this.setState({ DocBody: text }))
    .catch(error => console.log(error));
  }

  componentWillMount() {}

  componentDidMount() {
    const { match } = this.props
    this.loadDoc(match.params.fileId)
  }

  componentWillUnmount() {}

  componentWillReceiveProps(nextProps){
    const { match } = nextProps
    this.loadDoc(match.params.fileId)
  }

  componentWillUpdate() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.DocBody === "") {
      FB.XFBML.parse()
      return true
    }
    if (nextProps.match.params.index !== this.props.match.params.index) {
      this.state.DocBody = ""
      return false
    }
    return true
  }

  render() {
    const { menuVisible, dashboard, match, location } = this.props
    const { DocBody, FbAjax } = this.state
    const createMarkup = () => ({__html: DocBody + FbAjax})
    var headerStyle
    if (dashboard[match.params.index] !== undefined) {
      headerStyle = {
        backgroundImage: `url(${ImageUrl(dashboard[match.params.index].gsx$imageid.$t)})`
      };
    }

    return (
      <div
        className={('container page-fadein page-article container-menu-'+(menuVisible?'open':'closed'))}
      >
        <header className="hero-image" role="banner" style={headerStyle}>
          <MenuTrigger/>
        </header>
        <main>
          <h1></h1>
          <Row>
            <div
              className="col-xs-12 single-content"
              dangerouslySetInnerHTML={createMarkup()} />
          </Row>
        </main>
        <div
          className="fb-like col-xs-12 single-content"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
        <div
          className={('fb-comments col-xs-12 single-content')}
          data-href={`http://122.117.78.26:3000/${location.pathname}`}
          data-numposts="5"
          data-width = '100%'
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
