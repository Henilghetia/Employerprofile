import React, { Component } from 'react';
import Header from '../components/header';

//import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faTrash,faEdit,faUpload, faUserCircle, faPencilAlt, faPencilRuler} from '@fortawesome/free-solid-svg-icons';


class Profile extends Component {
    
    render() {
     
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                  <div class="row ml-xl-5 mt-xl-4">    {/* MAIN    ROW*/}
                 
                <div class="col border-right ">  {/*FRIST col START*/}
                      <label> <big><FontAwesomeIcon icon={faUserCircle} size="3x"/></big></label>

                    <div class="row ml-xl-5">
                             <div class="col-3 pl-3 pr-0 pt-0 mt-0">
                                <label >Name:</label>
                              </div>
                             <div class="col-9"  >
                             <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "name" ></input>
                             </div>
                      </div>

                    <div class="row ml-xl-5">
                           <div class="col-3  pl-3 pr-0">
                              <label>CurrentRole:</label>
                           </div>
                           <div class="col-9  pl-0 pr-0 ">
                           <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "JobSeeker" ></input>
                          </div>
                    </div>

                    <div class="row"  >
                      <div class="col-3">
                          <button type="button" class="text-center" class="btn btn-primary btn-sm rounded-pill">Switch Mode</button>
                    </div>
                    </div>


             </div> {/* Frist col ends*/}
               

                  
                    <div class="col border-right ">
                    <ul class="nav navbar-nav">
                    <li class="dropdown ">
                    <a href="#" class="dropdown-toggle"   data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PROFILE MANAGEMENT</span> <span class="caret"></span></a>
                    <div class="dropdown-menu text-white bg-dark">
                  
                    <h6 class="dropdown-header text-white">PROFILE MANAGEMENT </h6>
                    <a class="dropdown-item text-white" href="#">UPDATE PROFILE</a>
                    <a class="dropdown-item text-white" href="#">PASSWORD</a>
                    <a class="dropdown-item text-white" href="#">WORK EXPERIENCE</a>
                    <a class="dropdown-item text-white" href="#">YOUR PROFILE VIEWER</a>
                  
                    </div>
                    </li>
                    </ul>
                    </div>

                
                
                
                   <div class="col border-right">
                   <ul class="nav navbar-nav">
                   <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">SKILLS EVALUATION</span> <span class="caret"></span></a>
                   <div class="dropdown-menu  text-white bg-dark">
                   <h6 class="dropdown-header text-white">SKILLS EVALUATION</h6>
                   <a class="dropdown-item text-white" href="/SelfAssesment">SELF ASSESSMENT</a>
                   <a class="dropdown-item text-white " href="/ChakuriAssesment">CHAKURI ASSESSMENT</a>
                   <a class="dropdown-item text-white" href="/ExternalAssesment">EXTERNAL ASSESSMENT</a>
                  </div>
                   </li>
                   </ul>
                   </div>



                <div class="col border-right">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">JOB DASHBOARD</span> <span class="caret"></span></a>
                <div class="dropdown-menu  text-white bg-dark">
                <h6 class="dropdown-header text-white">JOB DASHBOARD</h6>
                <a class="dropdown-item text-white" href="/RecomendedJob">RECOMMENDED JOBS</a>
                <a class="dropdown-item text-white" href="/AppliedSavedJob">APPLIED/SAVED JOBS</a>
                <a class="dropdown-item text-white" href="#">CONSULT WITH EMPLOYER</a>
                <a class="dropdown-item text-white" href="#">CONSULT WITH RECRUITTER</a>
                </div>
                </li>
                </ul>
                </div>




            </div>  {/* MAIN    ROW ENDS*/}
          </div>  {/* Container ENDS*/}

         
          <div class =" border border-bottom border-dark col-10"  style={{marginLeft:"100px",marginBottom: "50px"}}/>

          <span class="text-primary offset-1" style={{marginLeft:'140px'}} ><b>Employer Profile</b></span>
          
      
          <span class="text-dark col border-left border-dark" style={{marginTop: '-75px', marginLeft:'13px'}}><b>Job Post</b></span>
          <div class =" border border-bottom border-dark col-10" style={{marginLeft:"110px"}}/>
        <div className="container align-items-center">
        <div className='mt-3'>
       
        <form class="inline">
          <div className="form-group">
            <label for="exampleInputHeadLine"><h6>Enter a Attractive Headline :</h6></label>
            <div  style={{marginRight: "200px"}}>
             <input type="text" class="text-primary" class="form-control" id="exampleInputHeadLine1" aria-describedby="emailHelp" placeholder="Enter an attractive headline to describe your company in two lines here..."></input>
             <button type="submit" style={{marginLeft: "950px",marginTop: "-67px",padding:"5px 20px 5px 20px"}} class="btn btn-primary btn-sm rounded-pill">SaveDetails</button>
             </div>
             
          </div>
        </form>
        </div></div>

{/*Personal Detail  Start*/}

          <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                
                <div class="row">
                                              <div class="col">
                                              <h6 class="mb-3 p-2 ml-2"><b>Personal Details</b></h6>
                                              </div>
                                              <div class="col-1">
                                                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   </div>
                                            </div>
                                            
                                            <div className="container">
                                            
                                            <div class="row">
                                                  <div class="col-4">
                                                    <label> First Name: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "name"     onChange={this.changeHandler}></input>
                                                  </div>
                                                  <div class="col">
                                                   <label>Middle Name: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "lastname"  onChange={this.changeHandler}></input>
                                                 </div>
                                                 <div class="col">
                                                   <label>Last Name: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "lastname"  onChange={this.changeHandler}></input>
                                                 </div>
                                             </div>
                                
                                            <div class="row">
                                              <pre>
                                                
                                              </pre>
                                            </div>
                                             <div class="row">
                                                  <div class="col-4 ">
                                                    <label>Gender: </label>
                                                    <input type ="text"style={{border: "0px"}}  class="text-primary"  placeholder = "gender"  onChange={this.changeHandler}></input>
                                                  </div>
                                                  
                                             </div>
                                
                                             <div class="row">
                                                  <div class="col-4">
                                                    <label> Nationality: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "nationality"onChange={this.changeHandler}></input>
                                                  </div>
                                                  <div class="col">
                                                    <label>Mob. No: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "mobilenumber"   onChange={this.changeHandler}></input>
                                                    <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   {/* <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label> */}
                                                  </div>
                                             </div>
                              {/* <div class="col-1">
                                          <div className="btn pull-right">
                                           <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                                          </div>
                                            </div>
                               */}
                                
                                
                                
                                <div class="row">
                                       <div class="col-4">
                                      <label>Email Id: </label>
                                            <input type ="email" style={{border: "0px"}} class="text-primary" placeholder = "name@gmail.com"  onChange={this.changeHandler}></input>
                                             </div>
                                              {/* <div class="col">
                                               <label>Email: </label>
                                                <input type ="email"  class="text-primary" placeholder = "name@gmail.com"  ></input>
                                               <a href ="#" class="btn  "><FontAwesomeIcon icon={faEdit}/></a>
                                             </div>*/}
                                               <div class="col">
                                               <label>Alternative Email:</label>
                                               <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Alternativename@gmail.com"  onChange={this.changeHandler}></input>
                                               <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   {/* <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label> */}
                                               </div>
                                           </div>
                                             
                                             <div class="row">
                                                  <div class="col-4">
                                                    <label> Permenent address: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "23, cyber city Baroda"     onChange={this.changeHandler}></input>
                                                  </div>
                                                  <div class="col">
                                                   <label>State: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Gujarat"  onChange={this.changeHandler}></input>
                                                 </div>
                                                 <div class="col">
                                                   <label>Country: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "india"  onChange={this.changeHandler}></input>
                                                 </div>
                                             </div>
                                
                                             <div class="row">
                                                  <div class="col-4">
                                                    <label> Current address: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "23, cyber city Baroda"     onChange={this.changeHandler}></input>
                                                  </div>
                                                  <div class="col">
                                                   <label>State: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Gujarat"  onChange={this.changeHandler}></input>
                                                 </div>
                                                 <div class="col">
                                                   <label>Country: </label>
                                                    <input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "india"  onChange={this.changeHandler}></input>
                                                 </div>
                                             </div>
                                
                                             <div class="row py-3" >
             <div class="col col-sm offset-10 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Details</button>
             </div>
             </div>

               </div>
            </div>
        </div>
      {/*<button type="submit">Save</button>*/}
                                        
         </div>
      {/*Personal details end */}

      {/*company details start*/}
      <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >

                               
                <div class="row">
                                              <div class="col">
                                              <h6 class="mb-3 p-2 ml-2"><b>Company Details</b></h6>
                                              </div>
                                              <div class="col-1">
                                                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   </div>
                                            </div>
                                            
             <div className="container  ">

                  <div class="row-sm m-0  text-left  ">
                    <label><b>Name of Company: </b></label>
                    <input type ="text" style={{border: "0px"}}  class="text-primary" placeholder = "name" ></input>
                  </div>
                  <div class="row-sm">
                     <label>Company Description: </label>
                    <input type ="text" style={{border: "0px"}} class="text-primary"></input>
                    <p>Primary duties include identifying business opportunities, building and maintaining successful relationships with prospects and existing clients, collaborating with executives on business strategy to determine objectives, 
                      evaluating current business performance and maximizing business reach and potentia</p>
                  </div>
                 <div class="row-sm">
                   <label><b>Employer Job Positon:</b></label>
                    <input type ="text" style={{border: "0px"}} class="text-primary"  placeholder = "year" ></input>
                 </div>
                < div class="row-sm">
                   <label>Employer job Description:</label>
                    <input type ="text" style={{border: "0px"}}  class="text-primary"></input>
                    <p>Researching, designing, implementing and managing software programs. Testing and evaluating new programs. Identifying areas for modification 
                      in existing programs and subsequently developing these modifications.</p>
                </div>

           
           </div>


           <div class="row py-3" >
             <div class="col col-sm offset-10 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Details</button>
             </div>
             </div>

               </div>
            </div>
        </div>


{/*company details end*/}


{/*Education Background start*/}
        <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >

                               
                <div class="row">
                                              <div class="col">
                                              <h6 class="mb-3 p-2 ml-2"><b>Education Background</b></h6>
                                              </div>
                                              <div class="col-1">
                                                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   </div>
                                            </div>
                                            
             <div className="container  ">

                  <div class="row-sm m-0  text-left  ">
                    <label><b>Name of Degree: </b></label>
                    <input type ="text" style={{border: "0px"}}  class="text-primary" placeholder = "name" ></input>
                  </div>
                  <div class="row-sm">
                     <label>Name of University/Institution: </label>
                    <input type ="text" style={{border: "0px"}} class="text-primary"  placeholder = " name" ></input>
                  </div>
                 <div class="row-sm">
                   <label>Start Date:</label>
                    <input type ="text" style={{border: "0px"}} class="text-primary"  placeholder = "year" ></input>
                 </div>
                < div class="row-sm">
                   <label>Date of Completion:</label>
                    <input type ="text" style={{border: "0px"}}  class="text-primary" placeholder = "year" ></input>
                </div>

           
           </div>


           <div class="row py-3" >
             <div class="col col-sm offset-10 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Details</button>
             </div>
             </div>

               </div>
            </div>
        </div>


{/*Education Background end*/}


{/*Projects start*/}
        <div className="container align-items-center">
             <div className='mt-3'>
                <div className="border border-dark rounded-lg" >
                <div class="row">
                                              <div class="col">
                                              <h6 class="mb-3 p-2 ml-2"><b>Projects</b></h6>
                                              </div>
                                              <div class="col-1">
                                                <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                                                   </div>
                                            </div>


                    <div className="container  ">

                               <div class="row-sm m-0  text-left  ">
                                  <label><b>Name: </b></label>
                                    <input type ="text" style={{border: "0px"}}  class="text-primary" placeholder = "name" ></input>
                                </div>
                                <div class="row-sm">
                                  <label>Name of University/Institution: </label>
                                  <input type ="text" style={{border: "0px"}} class="text-primary"  placeholder = " name" ></input>
                                </div>
                                <div class="row-sm">
                                    <label>Start Date:</label>
                                    <input type ="text" style={{border: "0px"}} class="text-primary"  placeholder = "year" ></input>
                                </div>
                                < div class="row-sm">
                                      <label>Date of Completion:</label>
                                     <input type ="text" style={{border: "0px"}}  class="text-primary" placeholder = "year" ></input>
                                </div>
                                <p>Perform project design and development activities according to customer specifications. Work with Manager in developing project plan, budget and schedule.
                                   Research and recommend new technologies to carry out project development tasks.</p>
                                </div>
                                    <div class="row py-3" >
                                    <div class="col col-sm offset-10 ">
                                    <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Details</button>
                                </div>
                                </div>

                            </div>
                            </div>
                  </div>
{/*Projects end*/}

{/*Langauage Background start*/}


<div className="container align-items-center">
             <div className='mt-3  mb-3'>
                <div className="border border-dark rounded-lg" >
                <h6 class="mb-3 p-2 ml-2"><b>Langauage Known</b></h6>
                                            <div className="container">
            <div class="row" style={{marginTop:"-40px",marginLeft:"40px"}}>
                  <div class="col">
                    <label></label>
                    </div>
                  <div class="col">
                     <label><h5>Profiency </h5></label>
                    </div>
                 <div class="col">
                   <label> <h5>Read </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Write </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Speak</h5> </label>
                    </div>
                    <div class="col-1">
                              <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                    </div>
             </div>

<div class="row">
                  <div class="col">
                    <label>English</label>
                    </div>
                  <div class="col">
                  < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col-1">
                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                    </div>
             </div>

<div class="row ">
                  <div class="col">
                    <label>Hindi </label>
                    </div>
                  <div class="col">
                  < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text" style={{border: "0px"}} class="text-primary"placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col-1">
                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                    </div>
             </div>
  
             <div class="row py-3" >
             <div class="col col-sm offset-10 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Detials</button>
             </div>
             </div>

          </div>
               </div>
            </div>
        </div>


{/*Langauge end*/}

{/*Langauage preffered Background start*/}


<div className="container align-items-center">
             <div className='mt-3  mb-3'>
                <div className="border border-dark rounded-lg" >
                <h6 class="mb-3 p-2 ml-2"><b>Langauage Preffered</b></h6>
                                            <div className="container">
            <div class="row">
                  <div class="col">
                    <label></label>
                    </div>
                  <div class="col">
                     <label><h5>Profiency </h5></label>
                    </div>
                 <div class="col">
                   <label> <h5>Read </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Write </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Speak</h5> </label>
                    </div>
                    <div class="col-1">
                              <a href ="#" class="btn  "><FontAwesomeIcon icon={faPencilAlt}/></a>
                    </div>
             </div>
<hr></hr>
<div class="row">
                  <div class="col">
                    <label>English</label>
                    </div>
                  <div class="col">
                  < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col-1">
                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                    </div>
             </div>
  


<hr></hr>


<div class="row ">
                  <div class="col">
                    <label>Hindi </label>
                    </div>
                  <div class="col">
                  < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text" style={{border: "0px"}} class="text-primary"placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" style={{border: "0px"}} class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col-1">
                     <a href ="#" class="btn  "><FontAwesomeIcon icon={faTrash}/></a>
                    </div>
             </div>
  
             <div class="row py-3" >
             <div class="col col-sm offset-10 ">
             <button type="submit"  class="btn btn-primary btn-sm rounded-pill">Save Details</button>
             </div>
             </div>

          </div>
               </div>
            </div>
        </div>


{/*Langauge Preffered end*/}

            </div>
      
        
        );
    }
}
 
export default Profile;