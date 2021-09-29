import React from 'react'
import Projects from '../projects';
import ProjectLayout from './ProjectLayout.js'

function Outline() {
    return (
        <div className='outline'>

            <div className='hero'>
                <h6>HELLO WORLD!!</h6>
                <h2>I'm Aaron Santano Rebelo</h2>
                <h4> A full Stack Mern developer | Photo Editor | Otaku</h4>
            </div>

            <div className='About-me'>
                <div className='col-1'>
                <h2>About ME</h2>
                    <p>
                    A MERN stack developer, looking forward to work in a company that offers a positive atmosphere to learn and implement new skills and technologies for the betterment of organization as well as myself.
                    </p>
                    <h2>Education</h2>
                    <ul>
                    <li>
                        Bachelor of Engineering(CSE)-Acharya Institute Of Technology(VTU)
                    </li>
                    <li>
                    MERN Stack development course-AltCampus
                    </li>
                    </ul>
                </div>

                <div className='col-2'>
                    <h2>Skills</h2>
                    <ul>
                        <li>Photoshop</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Node</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>

            <div className='Articles'>
                <h2>Articles</h2>
                <div className='article-box'>
                <a href="https://aaronr2020.hashnode.dev/hooks-at-a-glance" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630744018615%2F7oejGm8i5.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>Hooks at a Glance</p>
            </div>
          </a>

          <a href="https://aaronr2020.hashnode.dev/introduction-to-nodejs" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1623309690954%2FDeLl6wq7a.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>Introduction to node</p>
            </div>
          </a>

          <a href="https://aaronr2020.hashnode.dev/objects-in-javascript" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615838299434%2FvbYLhjQNn.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>Objects in Javascript</p>
            </div>
          </a>

        <a href="https://aaronr2020.hashnode.dev/css-grid-layout" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1613002372246%2FOfgNfoXD2.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>CSS-grid layout</p>
            </div>
          </a>

        <a href="https://aaronr2020.hashnode.dev/html-or-understanding-display" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1606667829597%2FTxvFtksDx.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>HTML | Understanding display</p>
            </div>
          </a>

          <a href="https://aaronr2020.hashnode.dev/html-or-back-to-the-basics" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1606582414023%2FaYEFNp4rT.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>HTML | back to the basics</p>
            </div>
          </a>
                    
          <a href="https://aaronr2020.hashnode.dev/the-request-response-cycle" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1606575448002%2FIFvbmnDSN.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>The Request / Response Cycle</p>
            </div>
          </a>         
                    
          <a href="https://aaronr2020.hashnode.dev/the-git-handbook" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1604148842742%2FTKQSTCFxQ.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>The Git Handbook</p>

            </div>
          </a>
                   
          <a href="https://aaronr2020.hashnode.dev/lets-talk-wsl" class="box-article-link"  rel="noreferrer">
            <div class="box-article">
              <img src="https://aaronr2020.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1604140582335%2FywvIYpMl7.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="" class="img-article" />
              <p>LETS TALK WSL</p>
            </div>
          </a>
         </div>
            </div> 

            <div className='project'>
              <h2>Projects</h2>
              <div className='project-outline'>
                {
                  Projects.map(project=>{
                    console.log(project.text);
                  return <ProjectLayout props={project} key={project.id}/>
                  })
                }
              </div>
            </div>

            <div className='getInTouch'>
            <h2>Get In Touch</h2>
            <div className='contacts'>
              {
                //email | P:no | gitHub-Link | 
              }
              <div className='contact-info'>
              <i class="fas fa-envelope"></i>
              <p> aaronrebelo.personal@gmail.com</p>
              </div>
              
              <div className='contact-info'>
              <i class="fas fa-phone-alt"></i>
              <p> 7899100223</p>
              </div>

              <div className='contact-info'>
             <i class="fab fa-github"></i>
              <a href='https://github.com/AaronR2021' target="_blank"> <p>AaronR2021</p></a>
              </div>
            </div>
            </div>
        </div>


    )
}

export default Outline
