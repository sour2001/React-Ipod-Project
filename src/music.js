import react from 'react';



class Music extends react.Component{
   
    constructor(props){
        super(props);
        this.state={
            products:[
                {
                 name:"Music",
                    id:1,
                    backgroundColor:"transparent",
                },
                {
                    name:"Artists",
                    id:2,
                    backgroundColor:"transparent",
                },
                {
                    name:"Albums",
                    id:3,
                    backgroundColor:"transparent",
                },
                {
                    name:"Songs",
                    id:4,
                    backgroundColor:"transparent",
                }
            ],
            selectedProductIndex:0,
        };
    }


    render(){ 
        const products = [...this.state.products];
        return(
            <div style={{marginLeft:"-50px"}}>
                <ul> 
                    {products.map((product) => (
                        <li key={product.id} style={{backgroundColor:product.backgroundColor}}>
                            {product.name}
                        </li>
                    ))}

                </ul>
            </div>
        )
    }

}

export default Music;