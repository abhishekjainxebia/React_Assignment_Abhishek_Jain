import React, {Component} from "react";
import PropTypes from "prop-types";
 
export default class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchProductsAsync();
    }
 
    render() {
        if (this.props.loading) {
            return (
                <h2>Products loading ...</h2>
            );
        }

        if (this.props.error) {
            return (
                <h2> Error loading products {this.props.errorMessage} </h2>
            )
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>+Cart</th>
                    </tr>
                  
                {
                    this.props.products.map (product => (
                        <tr key={product.id}>
                           <td>{product.name}</td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                           <td>
                               <button onClick={() => this.props.addItemToCart(product)}>
                                +Cart
                               </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        )

    }

}


ProductList.defaultProps = {
    products: [],
    loading: false,
    error: false,
    errorMessage: ''
}
