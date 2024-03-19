import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    const inputElement = document.querySelector(".terminal_input")
    if(inputElement){
      inputElement.focus()
    }
  }, [])



  const [inputValue, setInputValue] = useState("");
  const [textToShow, setTextToShow] = useState([]);
  const [textColor, setTextColor] = useState('red')



  const [path,setPath] = useState("C: /Users /Home>")

  const about = 
  `
    <p><h3>About me: </h3></p>
    <p><h4>Professional Experience at (SCSA)</h4></p>
    <p><h5>
      #website consist of 20+ pages. Developed user-centric React components, integrating top libraries and Rest
      API for seamless frontend-backend communication. I developed 50% of its pages with React.js. # I Collaborated with the
      backend team, ensuring smooth integration of components for an enhanced application interface. # We used
      Docker & GitLab & Trello for efficient development and deployment workflows. # I also Actively contributed in
      meetings, refining feature implementations to align with user needs. I have had an opportunity to express my
      opinion which then they used. # I Enhanced expertise by learning from a skilled. I gained a bunch of
      experience in React.js and its features and libraries.</h5>
    </p>

    <p><h4>Professional Experience at (DarieX)</h4></p>
    <p><h5>
      # Leading the migration process from a well-established .NET desktop application to React.js. This application
      has undergone development over 12 years and is presently in the process of improving and releasing
      updates. Due to the ongoing migration, expecting a substantial boost in React.js mastery. # I am using
      Devextreme React grids to enhance user interface and To improve the development quality. #implementing
      modern practices for continuous integration & client-centric solutions. #Driving innovation, honing skills, and
      pushing software development boundaries. #Envisioning a potential business growth of 200% for the company
      following the migration to the website.</h5>
    </p>

    <p><h4>Professional Experience in freelance</h4></p>
    <p><h5>
      # In Georgia's gaming scene, "LegendHub" is where League of Legends fans gather. I'm part of the team
      building this website because customer organize competitions for League of Legends players in Georgia. I
      work with a backend developer to make it happen. Additionally, We use Figma to style the pages,
      collaborating with a UI/UX designer to ensure a user-friendly experience. # Our collaboration is seamless, with
      regular meet calls keeping us aligned and focused. These sessions are essential for discussing current tasks
      and ensuring everyone remains on the same page.</h5>
    </p>

    <p><h4>Education: (BTU)business and technology University 2022-2026</h4></p>
    <p><h5>
      💡Proficiency in Python and Python 1 programming with emphasis on data structures and algorithms and OOP.
      💡Solid grasp of mathematical concepts, including calculus and discrete math.
      💡Explored digital art using Adobe After Effects and Illustrator, fostering creativity in design.
      💡Delved into network basics, gaining foundational knowledge in network principles.
      💡Studied management principles, innovative management, and entrepreneurship for a well-rounded understanding of business. I made 20+ project according to this subjects.
      💡Acquired foundational understanding of cybersecurity theory, enhancing knowledge in digital security.
      💡Blended technical expertise, creative skills, and business acumen for a strong professional foundation.
      💡SQL fundamentals.</h5>
    </p>

  `
  const projects = 
    `
      <p><h3>Projects: </h3></p> 
      <p><a href="https://ioane-tech-portfolio.netlify.app/">https://ioane-tech-portfolio.netlify.app/ </a></p>
      <p><a href="https://ioane-tech-caffe-marr-io.netlify.app/">https://ioane-tech-caffe-marr-io.netlify.app/ </a></p> 
      <p><a href="https://redberry-blogs.netlify.app/">https://redberry-blogs.netlify.app/ </a></p> 
      <p><a href="https://shopping-service.netlify.app/">https://shopping-service.netlify.app/ </a></p> 
      <p><a href="https://ioane-tech-hurryup.netlify.app/">https://ioane-tech-hurryup.netlify.app/ </a></p>
    `

  const commandError = "<p>Invalid Command! try again :)</p>  <p>if you want to know more about commands, type >>> help</p>"

  
  const keyEnter = (e) => {
    if (e.key === "Enter") {
      setInputValue("");
      const trimmedInputValue = inputValue.trim().toLowerCase();
      switch (trimmedInputValue) {
        case "clear":
          window.location.reload();
          break;
        case "help":
          setTextToShow(prevTextToShow => [
            ...prevTextToShow,
            `${inputValue} >>>`,
            {
              name: "type > io projects",
              description: "Explore my React.js, React.ts Vite projects to discover a diverse range of creations. These include my expertise in building modern, responsive front-end designs.",
            },
            {
              name: "type > io about",
              description: "Take a moment to introduce myself.",
            },
            {
              name: "type > color *green, red, blue or yellow*",
              description: "Change terminal color",
            },
            {
              name: "type > cd *your location here*",
              description: "Change file location",
            },
            {
              name: "type > cd..",
              description: "Change location, go back from file",
            },
            {
              name: "type > clear",
              description: "Clear terminal",
            }
          ]);
          break;

        case "io about":
          setTextToShow([...textToShow, `${inputValue} >>> ${about}`]);
          break;

        case "io projects":
          setTextToShow([...textToShow, `${inputValue} >>> ${projects}`]);
          break;

        case "color green":
          setTextColor('green');
          break;
        case "color blue":
           setTextColor('blue');
          break;
        case "color red":
          setTextColor('red');
           break;
        case "color yellow":
           setTextColor('yellow');
           break;

        default:
          if (trimmedInputValue.startsWith("cd ")) {
            const remainingPath = trimmedInputValue.substring(3);
            const newPath = path.slice(0, -1) + " /" + remainingPath + ">";
            setPath(newPath);
          }else if (trimmedInputValue === "cd.." && !path.endsWith("Home>")) {
            const pathWords = path.split(' ');
            pathWords.pop();
            const newPath = pathWords.join(' ');
            setPath(newPath + ">");
          }else if(trimmedInputValue === "cd.." && path.endsWith("Home>")){
            
          }
          else {
            setTextToShow([...textToShow, `${inputValue} >>> ${commandError}`]);
          }
          break;
      }
    }
  };

  return (
    <div style={{color:textColor}}>
      {textToShow.map((value, key) => {
         if (typeof value === 'object' && value !== null) {
          return(
            <div key={key}>
              {key === 0 && <p>{path}</p>}
              <p>{value.name}</p>
              <p>{value.description}</p>
            </div>  
          )
          
          } else {
              return(
                <>
                  <span>{path}</span>
                  <div dangerouslySetInnerHTML={{ __html: value }} />
                </>
              )
            }
        }
      )}
      <div className='container'>
        <span>{path}</span>
        <input
          style={{color:textColor,caretColor:textColor}}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={keyEnter}
          value={inputValue}
          spellCheck="false"
          className="terminal_input"
          type="text"
        />
      </div>
    </div>
  );
}

export default App;
