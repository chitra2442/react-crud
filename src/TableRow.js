
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.product_name}
          </td>
          <td>
            {this.props.obj.product_description}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            {this.props.obj.offer_price}
          </td>
          <td>
            {this.props.obj.offer_start_at}
          </td>
          <td>
            {this.props.obj.offer_end_at}
          </td>
          <td>
            <Link to={"/editProduct/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;