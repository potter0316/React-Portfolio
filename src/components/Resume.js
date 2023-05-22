import React from "react";
import Moonfish from '../images/moonfish.png';
import Plentyofguilds from '../images/plentyofGuilds.png';
// import project3 from '../images'

import '../styles/style.css';

function Resume() {
    return (
      <div class="resume">
        <h2>Projects</h2>
        <h3>Project 1: MoonFish</h3>
        <div class="MoonfishImg">
          <a href="https://github.com/lkalliance/Moon-Fish">
            <img src={Moonfish} alt="moonfish">
            </img>
          </a>
        </div>

        <h3>Project 2: Plenty o guilds</h3>
        <div class="PlentyofguildsImg">
          <a href="https://github.com/lkalliance/Moon-Fish">
            <img src={Plentyofguilds} alt="plenty of guilds">
            </img>
          </a>
        </div>

        <h3>Project 3: Coming Soon</h3>
        <div class="PlentyofguildsImg">
          <a href="https://github.com/lkalliance/Moon-Fish">
            <img src={Plentyofguilds} alt="plenty of guilds">
            </img>
          </a>
        </div>
        
        <hr />
        <h2>Skills</h2>
        <ul>
            <li>HTML, CSS, Javascript</li> 
            <li>Git</li>
            <li>Github Repo</li>
        </ul>
      </div>
     );
}

export default Resume;