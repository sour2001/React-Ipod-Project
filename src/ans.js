import React from 'react';
import Music from './music';

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

  componentDidMount() {
    // set initial background color for first product
    this.setProductBackgroundColor(0, "");
  }

  setProductBackgroundColor = (productIndex, color) => {
    const products = [...this.state.products];
    products[productIndex].backgroundColor = color;
    this.setState({ products });
  };

  handleMenuMouseEnter = () => {
    // set background color for selected product and reset others
    const products = [...this.state.products];
    products.forEach((product) => (product.backgroundColor = "transparent"));
    
    products[this.state.selectedProductIndex].backgroundColor = "lightblue";
    products[this.state.selectedProductIndex].backgroundWidth = "100px";

    // update selected product index
    const selectedProductIndex = (this.state.selectedProductIndex + 1) % 4;
    this.setState({ products, selectedProductIndex });
  };

  handleMouseEnter = () => {
    num1 = this.state.selectedProductIndex;
    console.log(num1);
    this.handleMenuMouseEnter();
  };

  Menu = () => {
    console.log("menu");
    num1 = -1;
    this.handleMenuMouseEnter();
  };

  render() {
    const { products } = this.state;

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

    if (num1 === 0) {
        return (
          <div className="ipod__screen" style={{ overflow: "hidden"}}>
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
