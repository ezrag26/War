import React from 'react'
import './list.css'

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      checked: false
    }
  }

  handleOnClickCheckbox = (ev) => {
    const checkbox = ev.target;
    const text = checkbox.nextElementSibling;

    if (this.state.checked) {
      checkbox.style.backgroundColor = 'inherit'
      text.style.color = 'black'
      text.style.textDecoration = 'inherit'
    } else {
      checkbox.style.backgroundColor = 'teal'
      text.style.color = 'rgba(0, 0, 0, .2)'
      text.style.textDecoration = 'line-through'
    }
    this.setState(state => ({ checked: !state.checked }))
  }

  onClick = (ev) => {
    ev.target.value = `${this.state.text}`
  }

  onLeave = (ev) => {
    const inputElem = ev.target.firstElementChild;
    if (!inputElem) return

    this.setState({ text: inputElem.value})
    ev.target.innerHTML = `${inputElem.value}`
  }

  handleOnWheel = (ev) => {
    ev.preventDefault();

    if (ev.deltaY === 0) {
      if (ev.deltaX > 0) ev.target.nextElementSibling.style.width = '7%';
      else ev.target.nextElementSibling.style.width = '0%';
    }
  }

  render() {
    return (
      <li className={'list-item'} style={{ display: 'flex', alignItems: 'center', margin: '0', paddingRight: '0' }}>
        <div style={{ width: '20px', height: '20px', border: '1px solid teal', borderRadius: '20px', marginRight: '5px', cursor: 'pointer' }} onClick={this.handleOnClickCheckbox}></div>
        <input onWheel={ this.handleOnWheel } onKeyDown={this.handleOnKeyDown} style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.5em', transition: '.5s' }} spellCheck={false} defaultValue={this.state.text} />
        <div style={{ width: '0%', height: '100%', transition: '1.5s', zIndex: '1', textAlign: 'center' }}><div style={{ backgroundColor: 'red' }}>Delete</div></div>
      </li>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  createListItems = ({ items = [] }) => {
    return (
      <div>
        {items.map(item => <ListItem text={item} />)}
      </div>
    );
  }

  addItem = (inputElem) => {
    const value = inputElem.value;

    if (!value) return

    this.setState({items: this.state.items.concat(value)})
    inputElem.value = '';
  }

  onKeyDown = (ev) => {
    const pressedKey = ev.key;

    if (pressedKey === 'Enter' || pressedKey === 'Escape') this.addItem(ev.target);
  }

  onButtonSubmit = (ev) => {
    this.addItem(ev.target.nextElementSibling);
  }

  handeOnBlur = (ev) => {
    this.addItem(ev.target)
  }

  render() {
    return (
      <div className={'list'} style={{ marginLeft: '50px', marginRight: '50px' }}>
        <div style={{ marginBottom: '15px' }}>
          Items: { this.state.items.length }
        </div>
        <ul>
          {this.createListItems({ items: this.state.items })}

          <li style={{ width: '100%', paddingRight: '0' }}>
            <input onKeyDown={this.onKeyDown} onBlur={this.handeOnBlur} id={'task-input'} type={'text'} style={{ border: 'none', outline: 'none', width: '100%', borderBottom: '1px solid black', paddingBottom: '5px', fontSize: '1.5em' }} spellCheck={false} placeholder={'Add Item'}/>
          </li>
        </ul>

      </div>
    );
  }
}

export default List;