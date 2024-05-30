import './App.css';
import {useRef} from 'react'
import { Link } from 'react-router-dom';
import {cntx} from './contex.js'
import {useContext} from 'react'
import {Template2} from './useresume.js'
import {useState,useEffect} from 'react'
import axios from 'axios';


function Section1( {check1,data,setData} ){
  const inpt=useRef({})
  const divRef=useRef(null)

  const setIn=(name)=>(element)=>{
    inpt.current[name]=element;
  };
  
  function handleClick(){
  
  
      const session1 = {
        'username': inpt.current['name'].value,
        'adress': inpt.current['adress'].value,
        'place': inpt.current['place'].value,
        'state': inpt.current['state'].value,
        'phno': inpt.current['phno'].value,
        'email': inpt.current['email'].value
      }
      setData(prev => [...prev, session1]);
      
       divRef.current.innerHTML="<h1></h1>"
       
        
        
      
    
      
    
  }
  
  return(
     <div ref={divRef}>
        <div className="section1" >
   
   <h3><pre><label>NAME</label>:   <input type="text" placeholder="Enter Name" ref={setIn('name')} name="username" ></input><br/></pre></h3>
   <h3><pre><label>Address</label> :   <textarea type="text" placeholder="eg-#5-7-8,street" ref={setIn('adress')} name="adress"></textarea><br/></pre></h3>
   <h3><pre><label>Place</label> :   <input type="text" placeholder="eg-hydrebad" ref={setIn('place')} name="text"></input><br/></pre></h3>
   <h3><pre><label>State</label> :   <input type="text" ref={setIn('state')} name="state"></input><br/></pre></h3>
   <h3><pre><label>Phone number</label>:   <input type="tel" ref={setIn('phno')} name="tel" ></input><br/></pre></h3>
   <h3><pre><label>Email</label>:   <input type="email" ref={setIn('email')} name="email"></input><br/></pre></h3>
    <button onClick={handleClick}>Submit</button>
    
        
     </div></div>
    );
     
}
function Section2({check1,data,setData}){

    const inpt=useRef({})
    const setIn=(name)=>(element)=>{
      inpt.current[name]=element;
    };
    const divRef=useRef(null)
    function handleClick(){
        const session1 = {
          'profile':inpt.current['profile'].value,
          'prof':inpt.current['prof'].value,
           'profinst':inpt.current['profinst'].value,
           'profyear':inpt.current['profyear'].value,
           'plus2':inpt.current['plus2'].value,
           'plus2per':inpt.current['plus2per'].value,
           'plus2year':inpt.current['plus2year'].value,
           'sscinst':inpt.current['sscinst'].value,
           'sscper':inpt.current['sscper'].value,
           'sscyear':inpt.current['sscyear'].value,
           'skill1':inpt.current['skill1'].value,
           'skill2':inpt.current['skill2'].value,
           'skill3':inpt.current['skill3'].value,
           'skill4':inpt.current['skill4'].value,
           'skill5':inpt.current['skill5'].value,
           'skill6':inpt.current['skill6'].value,
        };
        setData(prev => [...prev, session1]);
        divRef.current.innerHTML="<h1></h1>"
      }
    
            
  
    return(
      <div ref={divRef}>
        <div className="section2">
            <pre>     <h3><label>profile  </label>  :   <textarea type="text" ref={setIn('profile')}></textarea></h3>
                                       
          <h3>Education</h3> <ol>
<li><label>professional degree gained</label>   :<input type="text" ref={setIn('prof')}></input><br></br>
                      institution name             :     <input type="text" ref={setIn('profinst')}></input><br></br>
                      year                         :     <input type="number" min="2006" ref={setIn('profyear')} ></input></li>
          <li><label><h4>Plus Two</h4></label>
                      institution name             :      <input type="text" ref={setIn('plus2')}></input><br></br>
                      percentage obtained          :      <input type="text" ref={setIn('plus2per')}></input><br></br>
                    
                      year                         :      <input type="number" min="2006" ref={setIn('plus2year')} ></input></li>
          <li><label><h4>SSC</h4></label>
                      institution name             :      <input type="text" ref={setIn('sscinst')}></input><br></br>
                      Marks Obtained               :      <input type="text" ref={setIn('sscper')}></input><br></br>
                      year                         :      <input type="number" min="2006" ref={setIn('sscyear')}></input></li> 
         </ol></pre>
       <label><h3>Skills</h3></label>
       <div id="skill-list"><ol>
       <li><input type="text" ref={setIn('skill1')} ></input></li>
       <li><input type="text" ref={setIn('skill2')}></input></li>
       <li><input type="text" ref={setIn('skill3')}></input></li>
       <li><input type="text" ref={setIn('skill4')}></input></li>
       <li><input type="text" ref={setIn('skill5')}></input></li>
       <li><input type="text" ref={setIn('skill6')}></input></li>
        </ol></div>
                      
                      
          <button onClick={handleClick}>Submit</button>

          
        </div></div>
      )

}
function Section3({check1,data,setData})
{ 
  const inpt=useRef({})
  const setIn=(name)=>(element)=>{
    inpt.current[name]=element;
  }; 
  const divRef=useRef(null)
  
  function handleClick(){
      const session1 = {
        'KOE1':inpt.current['KOE1'].value,
        'KOEG11':inpt.current['KOEG11'].value,
         'KOEG12':inpt.current['KOEG12'].value,
         'KOEG13':inpt.current['KOEG13'].value,
         'KOE2':inpt.current['KOE2'].value,
         'KOEG21':inpt.current['KOEG21'].value,
         'KOEG22':inpt.current['KOEG22'].value,
         'KOEG23':inpt.current['KOEG23'].value,
         'KOE3':inpt.current['KOE3'].value,
         'KOEG31':inpt.current['KOEG31'].value,
         'KOEG32':inpt.current['KOEG32'].value,
         'strength':inpt.current['strength'].value,
         
      };
      setData(prev => [...prev, session1]);
      divRef.current.innerHTML="<h1></h1>"
    }
  

    return(
      <div ref={divRef}>
        <div className="section3">
                     <label><h3>Experiences</h3></label>
                     <ul>
                     <pre><label>kind of experience    :         </label>
                     <input type="text" placeholder="eg-hackatons,internsips" ref={setIn('KOE1')} ></input>
                     <br></br>experiences gained    :</pre>
                     <ol>
                        <li><textarea type="text" ref={setIn('KOEG11')}></textarea></li>
                        <li><textarea type="text" ref={setIn('KOEG12')}></textarea></li>
                        <li><textarea type="text" ref={setIn('KOEG13')}></textarea></li>

                     </ol>

                     </ul>



                     <ul>
                     <pre><label>kind of experience    :         </label>
                     <input type="text" placeholder="eg-hackatons,internsips" ref={setIn('KOE2')} ></input>
                     <br></br>experiences gained    :</pre>
                     <ol>
                        <li><textarea type="text" ref={setIn('KOEG21')}></textarea></li>
                        <li><textarea type="text" ref={setIn('KOEG22')}></textarea></li>
                        <li><textarea type="text" ref={setIn('KOEG23')}></textarea></li>

                     </ol>

                     </ul>



                     <ul>
                     <pre><label>kind of experience    :         </label>
                     <input type="text" placeholder="eg-hackatons,internsips" ref={setIn('KOE3')} ></input>
                     <br></br>experiences gained    :</pre>
                     <ol>
                        <li><textarea type="text" ref={setIn('KOEG31')}></textarea></li>
                        <li><textarea type="text" ref={setIn('KOEG32')}></textarea></li>
                        <li><textarea type="text" ref={setIn('strength')} ></textarea></li>

                     </ol>

                     </ul>

                 <button onClick={handleClick}>Submit</button>

        </div></div>
    )
  
}
function Section4({check1,data,setData}){
  const inpt=useRef({})
  const setIn=(name)=>(element)=>{
    inpt.current[name]=element;
  };
  const divRef=useRef(null)
  
  
  function handleClick() {
    
      const session1 = {
        'strength1':inpt.current['strength1'].value,
        'strength2':inpt.current['strength2'].value,
         'strength3':inpt.current['strength3'].value,
         'strength4':inpt.current['strength4'].value,
         'strength5':inpt.current['strength5'].value,
         'strength6':inpt.current['strength6'].value,
         'pn1':inpt.current['pn1'].value,
         'pn1d':inpt.current['pn1d'].value,
         'pn2':inpt.current['pn2'].value,
         'pn2d':inpt.current['pn2d'].value,
         'pn3':inpt.current['pn3'].value,
         'pn3d':inpt.current['pn3d'].value,
      };
      setData(prev => [...prev, session1]);
      divRef.current.innerHTML="<h1></h1>"
    }

  
    return(
      <div ref={divRef}>
            <div className="section4">
            <h3><label>Strengths</label></h3>
      <ol>
     <li><input type="text" ref={setIn('strength1')}></input></li>
     <li><input type="text" ref={setIn('strength2')}></input></li>
     <li><input type="text" ref={setIn('strength3')}></input></li>
     <li><input type="text" ref={setIn('strength4')}></input></li>
     <li><input type="text" ref={setIn('strength5')}></input></li>
     <li><input type="text" ref={setIn('strength6')}></input></li>
      </ol> 
      <h3><label>projects done</label></h3>
             <pre> <ul>
                    <label>project name</label>     : <input type="text" ref={setIn('pn1')}></input><br></br>
                    Description      : <textarea type="text" ref={setIn('pn1d')}></textarea>




              </ul>
              <ul>
              <label>project name</label>     :      <input type="text" ref={setIn('pn2')}></input><br></br>
                    Description      :      <textarea type="text" ref={setIn('pn2d')}></textarea>



              </ul>
              <ul>
              <label>project name</label>     :      <input type="text" ref={setIn('pn3')}></input><br></br>
                    Description      :      <textarea type="text" ref={setIn('pn3d')}></textarea>




              </ul></pre>
                
              
                <button onClick={handleClick}>Submit</button>
                
                
                
                
                </div>   
               
               
               
               
               
               
               
               </div>





    )

  



}
function Section5({check1,data}){
 
 if(check1){ return(<><Template2 check={check1} data={data}/></>);}
  

}









export default function Input() {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);
  const [res, setRes] = useState(false);
    

 
  const sem={sem:"hii"}
  //   {console.log("sec5check",data1)}
  //  {console.log("effecyed",data1)}
  //  axios.post('http://localhost/site/ind1.php',sem)
  //   .then(response=>{})

 
  return (
    <>
      
        <Section1 check1={check} data={data} setData={setData} />
        <Section2 check1={check} data={data} setData={setData}/>
        <Section3 check1={check} data={data} setData={setData} />
        <Section4 check1={check} data={data} setData={setData}/>
        
       
        <button id="sbtn" onClick={(e)=>{
          e.preventDefault();
           setCheck(pre=> pre=true)
           setRes(false)
           
        
  
           
        }               
        }>
          <b>NEXT</b>
        </button>
      
      <Section5 check1={check} data={data}></Section5>
      

  

    
    {/* { console.log("uiop",data)} */}
    </>
    
    );
    }
    
    
    
   






