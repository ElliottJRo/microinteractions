import React from 'react'
import {
  Spring,
  animated
} from 'react-spring'

class Header extends React.Component {
  state = { toggle: true }
  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  render() {
    const { value, handleSubmit, handleChange } = this.props
    const toggle = this.state.toggle
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
        <Spring
          native
          from={{ background: '#fff' }} to={{ background: toggle ? '#247BA0' : '#70C1B3' }}>
          {({ background }) => (
            <animated.input
              style={{ background }}
              autoFocus={true}
              className="new-todo"
              placeholder="What needs to be done?"
              value={value}
              onChange={handleChange}
              onFocus={this.toggle}
              onBlur={this.toggle}
            />
          )}
        </Spring>
        </form>
      </header>
    )
  }
}

export default Header
