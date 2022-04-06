import React, { useState } from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';
import Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
//port Typography from '@material-ui/core/Typography';
import { FormGroup } from '@mui/material';
import logo from './logopng.png';
import Welcome from './d2.png';

function Login(){
    const [Emailval,setEmailval]=useState('');
    const [Pass, setPass]=useState('');
    
    const handlesubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <div className='main-login'>
            <h1 >Login Page</h1>
            <div className='login-contain'>
                <div className='left-side'>
                    <div className='img-class'>
                        <img src={logo} alt="logo" id="img-id"/>
                    </div>
                   <FormGroup onSubmit={handlesubmit}>
                       <TextField required id="outlined-required" 
                       label="Email" value={Emailval} 
                       placeholder='Enter Your email...' type="email"
                       onChange={(e)=>{setEmailval(e.target.value)}} />
                       <TextField required id="outlined-required" 
                       label="Password" value={Pass} 
                       placeholder='Enter Password...' type="password"
                       onChange={(e)=>{setPass(e.target.value)}} />
                       <Button color='primary' variant='outlined'>Submit</Button>
                   </FormGroup>
                   <div className='footer'>
                       <h3>Don't have an Account ? <Link to="/Register">Register Now</Link></h3>
                   </div>
                </div>
                <div className='right-side'>
                     <div className='welcomenote'>
                         <h3>Welcome Back</h3>
                     </div>
                     <div className='welcomeimg'>
                        <img src={Welcome} alt="Welcome Note" id="wel"/>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Login;