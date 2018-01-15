import React from 'react'
import Credits from './Credits'
import ReadOther from './ReadOther'

const Footer = ({ match }) => (
  <footer className="single">
    <Credits
      match = {match}
    />
    <ReadOther/>
  </footer>
)

export default Footer
