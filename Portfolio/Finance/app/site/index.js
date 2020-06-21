import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [inflow, setInflow] = useState('');
  const [outflow, setOutflow] = useState('');

  const submitInflow = ({ inflow }) => {
    console.log('Inflow: ', inflow);
  };

  const submitOutflow = ({ outflow }) => {
    console.log('Outflow: ', outflow)
  };

  useEffect(() => {
    if (inflow === '') return;

    submitInflow({ inflow });
    setInflow('');
    document.getElementById('inflow').value = '';
  }, [inflow]);

  useEffect(() => {
    if (outflow === '') return;

    submitOutflow({ outflow });
    setOutflow('');
    document.getElementById('outflow').value = '';
  }, [outflow]);

  return (
    <>
      <label htmlFor={'inflow'}>InFlow: </label>
      <input id={'inflow'} name={'inflow'} placeholder={'Cash Inflow'}/>
      <button onClick={() => setInflow(document.getElementById('inflow').value)}>Submit</button>
      <label htmlFor={'outflow'}>OutFlow: </label>
      <input id={'outflow'} name={'outflow'} placeholder={'Cash Outflow'}/>
      <button onClick={() => setOutflow(document.getElementById('outflow').value)}>Submit</button>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));