import Clockheading from './components/clockheading';
import ClockSlogan from './components/clocksogan';
import CurrentTime from './components/currenttime';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
return( 
/* <center>
  <Clockheading></Clockheading>
  <ClockSlogan></ClockSlogan>
  <CurrentTime></CurrentTime>
</center> */
/* <h1 className="text-3xl font-bold text-blue-600 !important text-center mt-6"> Hello Tailwind</h1> */
/* <p className='bg-red-500 text-white p-4'>Test background</p> */
<div>
<h1 className='text-red-600 text-4xl font-bold'>This is blue-600</h1>
<h1 className='text-green-400 text-4xl font-bold'>This is Blue-400</h1>
<h1 className='text-yellow-900 text-4xl font-bold'>This is Blue-900</h1>
</div>
);
}

export default App
