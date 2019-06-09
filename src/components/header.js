import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/gatsby-astronaut.png'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
    width: 100px;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="astronaut Logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
