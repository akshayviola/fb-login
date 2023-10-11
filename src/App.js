import { Button, TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <div className="container">

        <div className="heading-part">
          <img src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="" />
          <p className="heading">Facebook helps you connect and share with the people in your life.</p>
        </div>

        <div className="form-part">

          <form>

            <div className='textfield'>
              <TextField className='outlined-basic' id="outlined-basic" label="Email address or phone number" variant="outlined" />
            </div>

            <div className='textfield'>
              <TextField className='outlined-basic' id="outlined-basic" label="Password" variant="outlined" />
            </div>

            <div className="textfield">
              <Button className='outlined-basic' variant="contained">Login</Button>
            </div>

            <div className="textfield border">
              <a href="">Forgotten password?</a>
            </div>

            <Button style={{ backgroundColor: '#42b72a', marginLeft: '100px' }} className='btn1' variant="contained">Create new account</Button>

          </form>


          <p className='text'><span>Create a Page </span>for a celebrity, brand or business.</p>

        </div>
      </div>
    </>
  );
}

export default App;
