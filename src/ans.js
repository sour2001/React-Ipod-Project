import React from 'react';
import Music from './music';

// initialize selected product index as -1
var num1 = -1;

class Ans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { 
          name: "Cover Flow",
          id: 1,
          backgroundColor: "transparent",
        },
        {
          name: "Music",
          id: 2,
          backgroundColor: "transparent",
        },
        {
          name: "Games",
          id: 3,
          backgroundColor: "transparent",
        },
        {
          name: "Settings",
          id: 4,
          backgroundColor: "transparent",
        }
      ],
      selectedProductIndex: 0,
    };
  }

  // set initial background color for first product on mount
  componentDidMount() {
    this.setProductBackgroundColor(0, "");
  }

  // function to set background color for a product
  setProductBackgroundColor = (productIndex, color) => {
    const products = [...this.state.products];
    products[productIndex].backgroundColor = color;
    this.setState({ products });
  };

  // function to handle mouse enter event on a product
  handleMouseEnter = () => {
    // reset all products background color
    const products = [...this.state.products];
    products.forEach((product) => (product.backgroundColor = "transparent"));
    
    // set background color and width for selected product
    products[this.state.selectedProductIndex].backgroundColor = "lightblue";
    products[this.state.selectedProductIndex].backgroundWidth = "100px";

    // update selected product index
    const selectedProductIndex = (this.state.selectedProductIndex + 1) % 4;
    this.setState({ products, selectedProductIndex });
  };

  // function to handle click event on a product
  handleClick = () => {
    // if no product is selected, set selected product index as current index
    if (num1 === -1) {
      num1 = this.state.selectedProductIndex;
      console.log(num1);
      this.handleMouseEnter();
    }
  };
  
  // function to handle menu button click
  Menu = () => {
    // reset selected product index and call handleMouseEnter function
    num1 = -1;
    this.handleMouseEnter();
  };

  render() {
    const { products } = this.state;

    // render the product menu
    if (num1 === -1) {
      return (
        <div className="ipod__screen">
          <div className="left">
            <ul>
              <div> 
                {products.map((product) => (
                  <li key={product.id}>
                    <div style={{ backgroundColor: product.backgroundColor ,marginLeft:"-30px",padding:"20px"}}>
                      {product.name}
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className="right">
            <img
              src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg"
              alt="island"
              id="island-image"
            />
          </div>
        </div>
      );
    }

    // render the settings page
    if (num1 === 0) {
        return (
          <div className="ipod__screen" style={{ overflow: "hidden",width:"190px"}}>
            <h1 style={{ width: "100%", height: "100%"}}>
              <img src="https://cdn.pixabay.com/photo/2012/05/04/10/57/gear-47203_960_720.png" alt="setting" id="island-image"></img>

            </h1>
          </div>
        );
        }

    if (num1 === 1) {
      return (
        <div className="ipod__screen" style={{ overflow: "hidden" }}>
          <h1 style={{ width: "100%", height: "45%", marginTop: "45%" }}>
            Component 
          </h1>
        </div>
      );
    }

    if (num1 === 2) {
      return (
        <div className="ipod__screen">
          <div className="left">
            <ul>
              <div>
                
                <Music />
              </div>
            </ul>
          </div>
          <div className="right">
            <img
              src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg"
              alt="gaming"
              id="island-image"
            />
          </div>
        </div>
      );
    }

    if (num1 === 3) {
        return (
          <div className="ipod__screen" style={{ overflow: "hidden"}}>
            <h1 style={{ width: "100%", height: "100%"}}>
              <img src="https://static.vecteezy.com/system/resources/previews/002/144/780/original/gaming-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg" alt="my" id="island-image"></img>
              
    
            </h1>
          </div>
        );
        }

        


  }
}







        

export default Ans;
