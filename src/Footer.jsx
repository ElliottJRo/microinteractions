import React from 'react'

const Footer = ({ itemsLeft, selected, handleSelect, handleClearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{itemsLeft}</strong> {itemsLeft === 1 ? 'item' : 'items'} left
    </span>
    <ul className="filters">
      <li>
        <a className={selected === 'all' ? 'selected' : ''} onClick={() => handleSelect('all')}>
          All
        </a>
      </li>
      <li>
        <a className={selected === 'active' ? 'selected' : ''} onClick={() => handleSelect('active')}>
          Active
        </a>
      </li>
      <li>
        <a className={selected === 'completed' ? 'selected' : ''} onClick={() => handleSelect('completed')}>
          Completed
        </a>
      </li>
    </ul>
    <button className="clear-completed" onClick={handleClearCompleted}>
      Clear completed
    </button>
  </footer>
)

export default Footer
