import React from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Music',
          id: 1,
          backgroundColor: 'transparent',
        },
        {
          name: 'Artists',
          id: 2,
          backgroundColor: 'transparent',
        },
        {
          name: 'Albums',
          id: 3,
          backgroundColor: 'transparent',
        },
        {
          name: 'Songs',
          id: 4,
          backgroundColor: 'transparent',
        },
      ],
      selectedProductIndex: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      alert('Click on Music to get Play VIDEO');
    }, 500);
  }

  render() {
    const products = [...this.state.products];
    return (
      <div style={{ marginLeft: '-50px' }}>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              style={{ backgroundColor: product.backgroundColor }}
              onMouseEnter={() => {
                const selectedProductIndex = products.indexOf(product);
                products[selectedProductIndex].backgroundColor = 'lightblue';
                this.setState({ products, selectedProductIndex });
              }}
              onMouseLeave={() => {
                const selectedProductIndex = products.indexOf(product);
                products[selectedProductIndex].backgroundColor = 'transparent';
                this.setState({ products, selectedProductIndex });
              }}
              onClick={() => {
                if (product.name === 'Music') {
                  window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                }
              }}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Music;
