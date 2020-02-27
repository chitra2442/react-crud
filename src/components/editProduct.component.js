import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import * as axios from 'axios';
export default class editProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onProductSubmit = this.onProductSubmit.bind(this);

        this.state = {
            product_name : '',
            product_description: '',
            is_active:true,
            price: '',
            offer_price: '',
            offer_start_at:'',
            offer_end_at:'',
            created_at: new Date(),
            updated_at: ""
        };
    }

    onChangeInput(element) {
        let id = element.target.id;
        switch(id) {
            case 'name':
                this.setState({product_name : element.target.value});
            break;
            case 'desc':
                this.setState({product_description : element.target.value});
            break;
            case 'price':
                this.setState({price : element.target.value});
            break;
            case 'offerPrice':
                this.setState({offer_price : element.target.value});
            break;
            case 'offerStart':
                this.setState({offer_start_at : element.target.value});
            break;
            case 'offerEnd':
                this.setState({offer_end_at : element.target.value});
            break;
        } 
    }

    onProductSubmit(element) {
        element.preventDefault();
        let productDetails = this.state;
        axios({
            method: 'post',
            url: 'http://localhost:4000/products',
            data: productDetails,
            headers: {'Content-Type': 'application/json' }
        })
        .then(() => this.setState(() => ({
            toDashboard: true
          })))
        .catch(function (response) {
            //alert('There is an error of adding the product');
        });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/productDetails' />
          }
        return(
            <div style={{marginTop: 10}}>
            <form onSubmit = {this.onProductSubmit}>
                <div className="form-group">
                    <label>Product Name:  </label>
                    <input type="text" id="name" class="form-control" value = {this.state.product_name} onChange = {this.onChangeInput} />
                </div>
                <div className="form-group">
                    <label>Product Description: </label>
                    <textarea id="desc" class="form-control" value = {this.state.product_description}  onChange = {this.onChangeInput} ></textarea>
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" id="price" class="form-control" value = { this.state.price}  onChange = {this.onChangeInput} />
                </div>
                <div className="form-group">
                    <label>Offer Price: </label>
                    <input type="text" id="offerPrice" class="form-control" value = {this.state.offer_price}  onChange = {this.onChangeInput} />
                </div>
                <div className="form-group">
                    <label>Offer start Date: </label>
                    <input type="date" id="offerStart" class="form-control" value = {this.state.offer_start_at}  onChange = {this.onChangeInput} />
                </div>
                <div className="form-group">
                    <label>Offer End Date: </label>
                    <input type="date" id="offerEnd" class="form-control"  value = {this.state.offer_end_at}  onChange = {this.onChangeInput} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Product" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}