import React from 'react'

const Header = ({ value, handleSubmit, handleChange }) => (
  <header className="header">
    <h1>todos</h1>
    <form onSubmit={handleSubmit}>
      <input autoFocus={true} className="new-todo" placeholder="What needs to be done?" value={value} onChange={handleChange} />
    </form>
  </header>
)

export default Header
