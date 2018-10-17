import React, { Component } from 'react'
import { AnchorButton, Navbar } from '@blueprintjs/core'

class Nav extends Component {
  render () {
    return (
      <Navbar>
        <div style={{ margin: '0 auto', width: 780 }}>
          <Navbar.Group>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <AnchorButton
              role='button'
              href='/'
              className='bp3-minimal'
              icon='home'
              text='Home'
            />
            <AnchorButton
              className='bp3-minimal'
              icon='plus'
              text='Create new room!'
            />
            <AnchorButton
              className='bp3-minimal'
              icon='key-enter'
              text='Join room!'
            />
          </Navbar.Group>
        </div>
      </Navbar>
    )
  }
}

export default Nav
