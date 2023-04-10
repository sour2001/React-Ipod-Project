import React, { Component } from "react";
import "./ipod.css";
import Ans from "./ans";

class Ipod extends Component {
  handleMouseEnter = () => {
    // Call the handleMouseEnter prop function in the Ans component
    this.ansComponent.handleMouseEnter();
  }; 

  handleClick = () => {
    // Call the handleMouseClick prop function in the Ans component
    this.ansComponent.handleClick();
    };

    Menu = () => {
        // Call the handleMouseEnter prop function in the Ans component
        this.ansComponent.Menu();
    }

  render() {
    return (
      
      <div className="all">
        
<div class="night">
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
</div>
        <div className="ipod">
        <Ans ref={(el) => (this.ansComponent = el)} />
          
          <div className="ipod__wheel">
            <div className="wheel__top">
              {/* Use the handleMenuMouseEnter function in the onMouseEnter event */}
              <div id="Menu"  onClick={this.Menu} onMouseEnter={this.handleMouseEnter}>
                Menu
              </div>
            </div>
            <div className="wheel__mid">
              <div id="rewind">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/467/467150.png"
                  alt="play"
                  id="i1"
                  onMouseEnter={this.handleMouseEnter}
                />
              </div>
              <div id="select">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/876/876173.png"
                  alt="select"
                  id="i2"
                  onClick={this.handleClick}
                />
              </div>
              <div id="fastforward">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4210/4210646.png"
                  alt="fastforward"
                  id="i3"
                  onMouseEnter={this.handleMouseEnter}
                />
              </div>
            </div>
            <div className="wheel__bottom">
              <div id="Play/Pause">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7375/7375961.png"
                  alt="play/pause"
                  id="i4"
                  onMouseEnter={this.handleMouseEnter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ipod;
