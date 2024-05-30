import './App.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import {useEffect} from 'react'

export default function Getid({check,id}) 
{

{console.log(id)}

if(check)
    {
          return(<><Template2/></>)
    }




}






















































export  function Template2({id,check,data}){
 


{console.log(data)}



const savedDigit = localStorage.getItem('digit');
console.log(savedDigit)

if(savedDigit=='1'){
 if(check) {
return( 
<>
<div id="template1">
<div>
    <h3>Name:</h3>   <p >{data[0].username}</p>  
    <h3>Adress:</h3> <p >{data[0].adress}</p>
    <h3>place:</h3>  <p >{data[0].place}</p>  
    <h3>state:</h3> <p>{data[0].state}</p>  
    <h3>phno:</h3>   <p >{data[0].phno}</p>
    <h3>Email:</h3>  <p >{data[0].email}</p>
    
  </div>        <hr></hr>
    
    <h2 >carrer objective:</h2>
    <p> {data[1].profile}</p>
<h2>work experience</h2>   
<ul>
    <h3>kind of experience</h3><p >{data[2].KOE1}</p>
  <ol>
      <li >{data[2].KOEG11}</li>
      <li >{data[2].KOEG12}</li>
      <li >{data[2].KOEG13}</li>
  </ol>  
  <h3>kind of experience</h3><p >{data[2].KOE2}</p>
  <ol>
  <li >{data[2].KOEG21}</li>
  <li >{data[2].KOEG22}</li>
  <li >{data[2].KOEG23}</li>
  </ol>
  <h3>kind of experience</h3><p >{data[2].KOE3}</p>
  <ol>
  <li >{data[2].KOEG31}</li>
  <li >{data[2].KOEG32}</li>
  <li >{data[2].strength}</li>
  </ol>
    
    
    
</ul>
    
<h2>skills</h2>    
<ol>
    <li>{data[1].skill1}</li>
    <li>{data[1].skill2}</li>
    <li>{data[1].skill3}</li>
    <li>{data[1].skill4}</li>
    <li>{data[1].skill5}</li>
    <li>{data[1].skill6}</li>
    
    
</ol>
<h2>proffesional qualification</h2>
<table border="2" cellpadding="10">
 <tr>
     <th>Degree</th><p ></p>

   
        <th>Institiute </th>
        <th>Year</th>
    </tr>
    <tr><td >{data[1].prof}</td>
    <td >{data[1].profinst}</td>
    <td >{data[1].profyear}</td></tr>
    
    
    
   
</table>
    <h2>Education</h2>
    <table border="2" cellpadding="10">
 <tr>
     <th>Degree</th>

   
        <th>Institiute </th>
        <th>Year</th>
        <th>percentage</th>
    </tr>
    <tr><td>plus 2</td>
    <td >{data[1].plus2}</td>
    <td >{data[1].plus2per}</td>
    <td >{data[1].plus2year}</td></tr>

    <tr><td>ssc</td>
    <td>{data[1].sscinst}</td>
    <td>{data[1].sscper}</td>
    <td>{data[1].sscyear}</td></tr>
    
    
    
   
</table>
<h2>strengths</h2>    
<ol>
    <li >{data[3].strength1}</li>
    <li >{data[3].strength2}</li>
    <li >{data[3].strength3}</li>
    <li >{data[3].strength4}</li>
    <li >{data[3].strength5}</li>
    <li >{data[3].strength6}</li>

    
    
</ol>   
<h2>projects done</h2>
<label>project name      :</label><p>{data[3].pn1}</p>
Description      :<p >{data[3].pn1d}</p>
<label>project name      :</label><p>{data[3].pn2}</p>
Description      :<p >{data[3].pn2d}</p>
<label>project name      :</label><p>{data[3].pn3}</p>
Description      :<p >{data[3].pn3d}</p>
</div>
<button className='Download' onClick={()=>{
html2canvas(document.querySelector('#template1')).then((canvas)=>{
  let bs=canvas.toDataURL('image/png')
  let pdf=new jsPDF('p','px',[1600,1132]);
  const pw=pdf.internal.pageSize.getWidth();
  const ph=pdf.internal.pageSize.getHeight();
  pdf.addImage(bs,'PNG',0,0,pw,ph);
  pdf.save('resume.pdf');
})


}}>DOWNLOAD</button> 


</>
)








}
}



if(savedDigit==='2'){
    if(check) {
   return( <>
    <div id="template0">
    <h1 align="center">RESUME</h1>
<div>
    <h3>{data[0].username}</h3>
    {data[0].adress}, <br/>
  
    {data[0].phno}<br/>
    {data[0].email}     
</div>
<hr/>
<h4>Objective </h4>
{data[1].profile}
<h4></h4>   
<h4>Education</h4>
<ol>
<li>passed {data[1].prof} from {data[1].profinst} </li>
<li>passed plustwo from {data[1].plus2}</li> 
<li>passed ssc from  {data[1].sscinst}</li>
</ol>
<h4>projects done</h4>
<pre>
•{data[3].pn1}        •{data[3].pn2}                        •{data[3].pn3}</pre>
<h4>Skills</h4>
<ul>
<li>{data[1].skill1}</li>
<li>{data[1].skill2}</li>
<li>{data[1].skill3}</li>
</ul>
<h4>Work Experience</h4>
<ul>
<ul>
   <h5>{data[2].KOE1}</h5>
   <ul>
       <li>{data[2].KOE11} </li>
       <li>{data[2].KOE12}</li></ul>
</ul>
<ul>
   <h5>{data[2].KOE2}</h5>
       <ul><li>{data[2].KOE21}</li>
       <li>{data[2].KOE22}</li></ul>
</ul>

</ul>
<h4>Strengths</h4>
<ul>
<li>{data[3].strength1}</li>
<li>{data[3].strength2}</li>
<li>{data[3].strength3}</li>
<li>{data[3].strength4}</li>

</ul>
<h4>Personal Details</h4>
<ul>

<li>
    <pre>Date Of Birth:    yyyyy</pre>
</li>
 
<li>
    <pre>Gender:          male</pre>
</li>
  
<li>
    <pre>Marital status:   married</pre>
</li>
 
<li>
    <pre>Nationality:    hdhdd</pre>
</li>

</ul>

</div>    
<button className='Download' onClick={()=>{
html2canvas(document.querySelector('#template0')).then((canvas)=>{
  let bs=canvas.toDataURL('image/png')
  let pdf=new jsPDF('p','px',[1600,1132]);
  const pw=pdf.internal.pageSize.getWidth();
  const ph=pdf.internal.pageSize.getHeight();
  pdf.addImage(bs,'PNG',0,0,pw,ph);
  pdf.save('resume.pdf');
})


}}>DOWNLOAD</button>  </>  )
        }} 
       












 

if(savedDigit==='3'){


    if(check){



        return(
            <>
            
            
            <div id="template3">
        <div id="main">
      <div id="resumehead">
      <h1 align="start" id="he1">{data[0].username}</h1>
      
      </div>
      <div id="dp">
          <div id="details" >
            <div id="phn"><pre><b>phone</b>      :</pre><p id="phn-no">{data[0].phno}</p></div>
            <div id="Email"><pre><b>Email</b>      :</pre><p id="em">{data[0].email}</p></div>
            <div id="lctn"><pre><b>Adress</b>     :</pre><p id="adrs">{data[0].adress}</p></div>
            <div id="lctn"><pre><b>place</b>       :</pre><p id="adrs">{data[0].place}</p></div>
            <div id="lctn"><pre><b>state</b>       :</pre><p id="adrs">{data[0].place}</p></div>

          </div>
        
          <div id="profile">
            <div id="pro">PROFILE</div>
            <div id="pro-info">{data[1].profile}</div>
          </div>
        </div><hr></hr>
        <div id="SEE">
          <div id="sked-ex">
              <div id="sked">
                <div id="skills">
                  <div id="skl">SKILLS</div>
                  <ul id="skill">
                    <li id="skill-1">{data[1].skill1}</li>
                    <li id="skill-2">{data[1].skill2}</li>
                    <li id="skill-3">{data[1].skill3}</li>
                    <li id="skill-4">{data[1].skill4}</li>
                    <li id="skill-5">{data[1].skill5}</li>
                    <li id="skill-5">{data[1].skill6}</li>
                  </ul>
                </div>
                <div id="separator"></div><hr></hr>

                <div id="edu">EDUCATION
                  <div id="eng"><h5>{data[1].prof}</h5>
                  <div id="eng-clg"><h6>{data[1].profinst}</h6></div>
                  <div id="eng-tym">{data[1].profyear}</div>
                  </div>
                  <div id="inter"><h4>Intermediate</h4></div>
                  <div id="inter"><h5>{data[1].plus2}</h5>
                  <div id="int-clg"><h6>{data[1].plus2per}</h6></div>
                  <div id="int-tym">{data[1].plus2year}</div>
                  </div>
                  <div id="school"><h4>Class X</h4></div>
                  <div id="school">{data[1].sscinst}<h5></h5>
                  <div id="scl-clg"><h6>{data[1].sscper}</h6></div>
                  <div id="scl-tym">{data[1].sscyear}</div>
                  </div>
                </div>
              </div>
              <div id="ex">
                <div id="exp">EXPERIENCE
                <div id="intsp"><h5>InternShip</h5>
                <div id="is">explain about your internship and the courses you have learned in the internship</div>
                </div>
                  <div id="hack"><h5>Hackathon</h5>
                    <div id="hck">explain about your Hackathon and the courses you have learned in the hackathon.Describe about the project you have done </div>
                  </div>
                </div><hr></hr>
                <div id="strengths">
                  <div id="st">STRENGTHS</div>
                    <ul id="stren">
                        <li id="strength-1">{data[3].strength1}</li>
                        <li id="strength-2">{data[3].strength2}</li>
                        <li id="strength-3">{data[3].strength3}</li>
                        <li id="strength-4">{data[3].strength4}</li>
                        <li id="strength-5">{data[3].strength5}</li>
                        <li id="strength-5">{data[3].strength6}</li>

                      </ul>
                  
                </div>
              </div>
              
          </div>
          
        </div><hr></hr>
        <div id="projects">
          <div id="pro">PROJECTS</div>
          <ul id="pro-list">
                        <li id="project-1"><h5>{data[3].pn1}</h5>
                        <div id="pro-1"></div>{data[3].pn1d}</li>
                        <li id="project-2"><h5>{data[3].pn2}</h5>
                        <div id="pro-1"></div>{data[3].pn2d}</li>
                        <li id="project-3"><h5>{data[3].pn3}</h5>
                        <div id="pro-1"></div>{data[3].pn3d}</li>
                        
                      </ul>
        </div><hr></hr>
    </div>
    </div> 
            
    <button className='Download' onClick={()=>{
html2canvas(document.querySelector('#template3')).then((canvas)=>{
  let bs=canvas.toDataURL('image/png')
  let pdf=new jsPDF('p','px',[1600,1132]);
  const pw=pdf.internal.pageSize.getWidth();
  const ph=pdf.internal.pageSize.getHeight();
  pdf.addImage(bs,'PNG',0,0,pw,ph);
  pdf.save('resume.pdf');
})


}}>DOWNLOAD</button> 
            
              
            </>
        )
    }
}

}
