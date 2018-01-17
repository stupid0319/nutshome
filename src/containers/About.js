import React from 'react'
import PropTypes from 'prop-types'
import MenuTrigger from './MenuTrigger'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import { DocUrl, ImageUrl } from '../actions'
import Posts from './lists/Posts'
import Categories from './lists/Categories'
import DocumentTitle from 'react-document-title'
import pageConfig from '../config.js'
/*global FB*/

const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

var divStyle = {
  color: 'white',
  backgroundImage: `url(${ImageUrl("1091CfqKejexa3DQSemWno2UY6B0NKt7N")})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class About extends React.Component {
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

  componentDidMount() {
    this.loadDoc(pageConfig.aboutId)
  }

  render() {
    const { menuVisible } = this.props
    const { DocBody } = this.state
    return(
      <DocumentTitle title="兩姊妹堅果-關於">
      <main className={`container page-fadein left-container page-home ${menuVisible? "container-menu-open":"container-menu-closed"}`}>
        <div className="row">
          <section className="sidebar col-md-5 col-sm-12" style={divStyle}>
          <MenuTrigger/>
          </section>
          <section className="col-md-7 col-sm-12 col-md-offset-5 main-content modal-container">
            <main>
              <Row>
                <div
                  className="col-xs-12 single-content"
                  dangerouslySetInnerHTML={{ __html: DocBody }}
                />
              </Row>
            </main>
          </section>
        </div>
      </main>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)
