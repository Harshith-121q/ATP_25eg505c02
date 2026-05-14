// import "Product.css"
// import Product from "./App.js"

function Product(props){        // props ={key,obj}
    // state
    const {productObj} = props;// props is a single object
    // return 
        return (
            <div className="bg-gradient-to-b from-white to-blue-400 p-7 border-gradient-to ">
                <h1 className="text-2xl text-gre-300 p-1 font-bold">{productObj.title}</h1>
                
                <p className="p-1 ">{productObj.description}</p>
                <p className="p-1 font-medium">Category : {productObj.category}</p>
                <p className="p-1 font-mono font-bold ">Price:{productObj.price}</p>
            </div>
        )
}
export default Product;