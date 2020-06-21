import React from 'react'
import './header.css'

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    }
  }

  render() {
    return (
      <li style={{ fontWeight: "bold" }}>{this.state.text}</li>
    );
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highlightedItem: null
    }
  }

  handleOnMouseOver = (ev) => {
    const elem = ev.target;

    if (elem === this.state.highlightedItem) return;

    elem.style.backgroundColor = 'rgba(255, 255, 255, .6)';
    elem.style.color = 'black';
  }

  handleOnMouseOut = (ev) => {
    const elem = ev.target;

    if (elem === this.state.highlightedItem) return

    elem.style.backgroundColor = 'initial'
    elem.style.color = 'lightgrey';
  }

  handleOnClick = (ev) => {
    const elem = ev.target;
    if (elem === this.state.highlightedItem) return;

    const prevHighlighted = this.state.highlightedItem;

    elem.classList.add('highlight');
    this.setState({ highlightedItem: elem});

    elem.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    elem.style.color = 'black';

    if (prevHighlighted) {
      prevHighlighted.classList.remove('highlight');
      prevHighlighted.style.backgroundColor = 'initial'
      prevHighlighted.style.color = 'lightgrey';
    }
  }

  render() {
    return (
      <header>
        <nav>
          <ul onClick={this.handleOnClick} onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut}>
            <NavItem text={'To Do'} />
            <NavItem text={'Completed'} />
            <NavItem text={'All'} />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;