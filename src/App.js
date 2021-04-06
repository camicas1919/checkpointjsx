import imageInSrc from './imageInSrc.jpg';

import './App.css';
import '../src/css/myapp.css'

function App() {
  return (
    <>
    {/*<div style={{border: 'solid 1px black', maxWidth: '100vw'}} />*/}

    <div id="div" >
       <h1 className="title red">Your name here</h1>  <br/>
        <img src={imageInSrc}  alt="imageInSrc" />  <br/>
        <img src={"/imageInPublic.jpg"}  alt="imageInPublic" />  <br/>
        </div>
        <video width="320" height="240" controls >
      <source src="/videos/summerTime.mp4" type="video/mp4"/>
</video>

      
        
       
    
        </>
  );
}

export default App;
