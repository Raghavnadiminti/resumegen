import './App.css';
import imgs from './data.js';
import {useState} from 'react';
import Input from './input.js';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes ,Link} from 'react-router-dom';
import {Template2} from './useresume.js';




function Background({i,setI}){
        
        
        
        return(    <>
            
            <div id='head'><div id='headnew'>NEW !</div> Get hired faster with a ATS friendly Resume.</div>

<h1 align="center" id="temp"><span>Select Template</span></h1>
<div id='homepage'>
   <div id='homehead'>Job Winning<br></br>Resume-Generator</div>
             
             <div id="container">
              <div id="prediv" style={{ backgroundImage: `url(${imgs[i%4].imgsrc})` ,
                                        backgroundSize:'cover'}}></div>

              <div id="presdiv" style={{ backgroundImage: `url(${imgs[(i+1)%4].imgsrc})`
                                        }}></div>
              
              <div id="nexdiv" style={{ backgroundImage: `url(${imgs[(i+2)%4].imgsrc})`,
                                        backgroundSize:'cover'}}></div>
              


             </div></div>
             <div id='homematter'>Get the Job 2x faster.Choose from the<br></br> Requiter-approved Templates.Custom-tailor resumes <br></br>for any job within minutes. Increase your interview <br></br>chances and rise above the competition.</div>
         <Link to="/inpt">    <button id="ns" onClick={()=>{
                 const digit=`${imgs[(i+1)%4].id}`
                 localStorage.setItem('digit', digit.toString());
             }}><p>choose a template</p></button></Link>

             <button id="next" onClick={
                ()=>{setI(i+1); }
             }> <p>  next </p>    </button>
                                                         
             <button id="prev" onClick={
                ()=>{setI(i-1);}
             }> <p>  prev </p>    </button>
             
             
             </>);






}





















export default function Myfun(){
   const [i,setI]=useState(0)
      
 return( <>
    
    
 <BrowserRouter>


<Routes>
<Route path='/' element={<Background i={i} setI={setI}/>}></Route>
   <Route path='/inpt' element={<Input />}></Route>
   
   
</Routes>
</BrowserRouter> 
 </> );


};
