import React, { Component } from 'react';
import * as axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
const columns = [
    {
      name: 'Product Name',
      selector: 'product_name',
      sortable: true,
    },
    {
      name: 'Product Description',
      selector: 'product_description',
      sortable: true,
      right: true,
    },
    {
        name: 'Price',
        selector: 'price',
        sortable: true,
        right: true,
    },
    {
        name: 'Offer Price',
        selector: 'offer_price',
        sortable: true,
        right: true,
    },
    {
        name: 'Offer Start Date',
        selector: 'offer_start_at',
        sortable: true,
        right: true,    
    },
    {
        name: 'Offer End Date',
        selector: 'offer_end_at',
        sortable: true,
        right: true,
    },
    {
        name: 'Action',
        selector: 'id',
        actions: ()=> {
          //element.preventDefault();
          let productDetails = this.state.products;
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
        },
        sortable: true,
        right: true,
    },
  ];

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
      }
      componentDidMount(){
        axios.get('http://localhost:4000/products')
          .then(response => {
            this.setState({ products: response.data });
            console.log(this.state.products)
          })
          .catch(function (error) {
            console.log(error);
          })
      }
  
      render() {
        return (
            <DataTable
            title="Product Details"
            columns={columns}
            data={this.state.products}
          />
        );
      }
    }