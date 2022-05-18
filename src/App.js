import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobile';

function App() {
  
  let Os = [ "Andirod","balckBerry","Iphone","window-phone"]

  let System = ["Samsange","Htc","micromax","Apple"]
  

  return (
    <div className="App">
      
      <>
      <h1>Mobile Operating System</h1>
      {Os.map((part)=>(
        <div>
          <Mobile   {...part}/>

        </div>

      ))}
      
      </>
      
      <>
      <h1>Mobile System</h1>
      {System.map((part)=>(
        <div>
          
          <Mobile   {...part}/>

        </div>

      ))}
      
      </>
     
      

      
    </div>
  );
}

export default App;
