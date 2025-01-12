import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import styles from 'styles/index.module.scss'
import DarkModeToggle from "react-dark-mode-toggle";
import React, {useState} from 'react';
//import Stack from 'react-bootstrap/Stack'

export default function Header() {
  const [isDarkMode, setDarkMode] = React.useState(false);
const switchTheme = (checked) => {
    const currentTheme = document.documentElement.dataset.theme;
    setDarkMode(checked);
    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
   }


  return (
      
      <Row className={`${styles.h70px} px-3 align-content-center fixed-top bg-white shadow-sm`}>
        <Col>
          <p className="text-dark-blue fw-bold fs-5">Where in the world</p>
        </Col>
        <Col xs='auto'>
    <div>
        <DarkModeToggle
         onChange={switchTheme}
         checked={isDarkMode}
         style={{ marginRight: '4rem'}}     
        />  
    </div>
          <style jsx global>{`
        :root {
          --bg-color: white;
          --primary-color: black;
          --secondary-color: rgb(113, 128, 158);
        }

        [data-theme="dark"] {
          --font-color: white;
          --bg-color: hsl(0, 100%, 1%);
     
        }

        body {
          background: var(--bg-color);
          transition: background 0.5s;
          Homepage Items: 14px
          Detail Page: 16px 
        }

      
        
      `}</style>
    
  

        </Col>
      </Row>
    
  );
}
