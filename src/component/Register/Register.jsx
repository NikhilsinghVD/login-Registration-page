import React from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import logo from './download1.png';
function Register(){
    return(
        <div className='mRegister'>

           <div className='left-side'>
               <div className='header'>
                   <img src={logo} alt="reg_logo" id="img"/>
               </div>
               <p>Dfddf sfgf fgfgf gfgfgg iiyrffscc gfhghfsd  fcf  gggh ghghh 
                    ghgghgh cddxdde dsxdxdxd xccdff frccfc cfcfcfc ffcfc fccfcf fcfcfc 
                     cfcfcfc fcfcfcf gfgffg gfgfggfgf gfggfgfg gfgggfg gfgffggf gfggfgfg
                     sdsds d fdfgd gfgf fgfgfgf fgfgfg gfgfgf gffgf gfgfgf fgfgf gfgfgf 
                     rerere rerere ererere ererere rerere rerere rerere erere  rerere rere
               </p>
           </div>
           
           <div className='right-side'>
               <div className='top-right'>
                 <h4>Already have an Account ?         
                 <Link id="linkSignIn" to="/">Sign In</Link></h4> 
               </div>
               <div className='body-right'>
                   <div className='container'>
                       <form>
                       <div className='inputGroup'>
                           <h5>First Name</h5>
                           <input type='text' name="FirstName" id='fname'/>
                       </div>
                       <div className='inputGroup'>
                           <h5>Last Name</h5>
                           <input type='text' name="LastName" id='lname'/>
                       </div>
                       <div className='inputGroup'>
                           <h5>Email</h5>
                           <input type='email' name="Email" id='email'/>
                       </div>
                       <div className='inputGroup'>
                           <h5>Password</h5>
                           <input type='password' name="Password" id='pass'/>
                       </div>
                       <div className='inputGroup'>
                           <h5>Confirm Password</h5>
                           <input type='password' name="password" id='pass2'/>
                       </div>
                       <input type="button" value="Submit"/>
                       </form>
                   </div>
               </div>
           
           </div>
        </div>
    )
}

export default Register;