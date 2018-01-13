import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DocUrl, ImageUrl } from '../actions'
import MenuTrigger from './MenuTrigger'
import { Row } from 'react-bootstrap'

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
      DocBody: ""
    }
    this.loadDoc = this.loadDoc.bind(this);
  }

  loadDoc(fileId) {
    fetch(DocUrl(fileId))
    .then(response => response.text())
    .then(text => this.setState({ DocBody: text }));
  }

  componentWillMount() {}

  componentDidMount() {
    const { match } = this.props
    this.loadDoc(match.params.fileId);
  }
  componentWillUnmount() {}

  componentWillReceiveProps(nextProps){

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.match.params.fieldId === nextProps.match.params.fieldId
  }

  componentWillUpdate(nextProps, nextState) {
    const { match } = nextProps
    this.loadDoc(match.params.fileId)
  }

  render() {
    const { menuVisible, dashboard, match } = this.props
    const { DocBody } = this.state
    const createMarkup = () => ({__html: DocBody})
    var headerStyle
    if (dashboard[match.params.index] !== undefined) {
      headerStyle = {
        backgroundImage: `url(${ImageUrl(dashboard[match.params.index].gsx$imageid.$t)})`
      };
    }

    return (
      <div className={('container page-fadein page-article container-menu-'+(menuVisible?'open':'closed'))}>
        <header className="hero-image" role="banner" style={headerStyle}>
          <MenuTrigger/>
        </header>
        <main>
          <Row>
            <div
              className="col-xs-12 single-content"
              dangerouslySetInnerHTML={createMarkup()} />
          </Row>
        </main>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
