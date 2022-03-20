import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Person></Person>
    <Person></Person>
      <Person></Person>
      <Name2></Name2>
    </div>)
}

function Person() {

      return (
        <div className='person'>
          <h1>Shakib Al Hasan</h1>
          <p>Profession:Cricketer</p>
        </div>
      )
      
    }
  
function Name2() {
      
  return (
    <div className="person2">
      <h1>Ajay Devgan</h1>
      <p>Profession:Maramari</p>
    </div>
  )
      
    }


export default App;
