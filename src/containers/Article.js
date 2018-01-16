import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DocUrl, ImageUrl } from '../actions'
import MenuTrigger from './MenuTrigger'
import { Row } from 'react-bootstrap'
import Footer from './footer/Footer'
import DocumentTitle from 'react-document-title'
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
    }
    this.loadDoc = this.loadDoc.bind(this);
  }

  loadDoc(fileId) {
    fetch(DocUrl(fileId))
    .then(response => response.text())
    .then(text => {
      this.setState({ DocBody: text });
      FB.XFBML.parse();
      window.scrollTo(0, 0);
      })
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
    const { DocBody } = this.state

    if (dashboard[match.params.index] === undefined) {
      return (<div></div>)
    }
    var headerStyle = {
        backgroundImage: `url(${ImageUrl(dashboard[match.params.index].gsx$imageid.$t)})`
    }

    return (
      <DocumentTitle title={`兩姊妹堅果-${dashboard[match.params.index].gsx$title.$t}`}>
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
              dangerouslySetInnerHTML={{ __html: DocBody }} />
          </Row>
          <div
            className="fb-like col-xs-12 single-content"
            data-share="true"
            data-width="450"
            data-show-faces="true"
            data-colorscheme = 'light'
          />
          <div
            className='fb-comments col-xs-12 single-content'
            data-href={`http://122.117.78.26:3000/${match.params.fileId}`}
            data-numposts="5"
            data-width = '100%'
            data-colorscheme = 'light'
          />
        </main>
        <Footer
          match = {match}
        />
      </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
