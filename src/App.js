import logo from './logo.svg';
import './App.css';
import picture from './profilePicture.jpeg';
import { useState } from 'react';
import TextBox from './TextBox';

function App() {

  const [text, setText] = useState('');

  function handleChange(event){
    setText(event.target.value);
  }
  return (
    <div>
      
      <p class = "title">Personal Website</p>
      
<div style={{display: 'flex', justifyContent: 'center'}}>
      <nav classname ="my-nav-bar">
  <ul>
    <a className="my-nav-bar">Home</a>
    <a className="my-nav-bar">About</a>
    <a className="my-nav-bar">Contact</a>
  </ul>
</nav>
</div>

<div classname = "container mx-auto px-4">
  <TextBox
  name = "myTextbox"
  label="Enter project here: "
  value={text}
  onChange={handleChange}
  />

</div>



    </div>
    
  );
}

export default App;
