import React, { Component } from "react";

export default class MainContent extends Component {
  state = { 
      pageTitle: "Customers:",
      customersCount: "5", 
      customers: [
      {id: 1, name: "Luke", phone: "987-765", address: {city: "London"}},
      {id: 2, name: "Stef", phone: "654-321", address: {city: "NY"}},
      {id: 3, name: "Jack", phone: "123-456", address: {city: "St. Petersburg"}},
      {id: 4, name: "Steve", phone: null, address: {city: "Paris"}},
      {id: 5, name: "Karl", phone: null, address: {city: "Berlin"}}
  ] 
};

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {this.getCustomerRow()}
            </tbody>
        </table>
      </div>
    );
  }

  // Executes when the user clicks the Refresh button
  // Hence this is the arrow function, the word "this" refers to this component, not to the element itself, on which the methods points to the very function
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender(phone) {
      return phone ? phone : <span className="bg-warning p-2">No phone provided</span>;
  }

  getCustomerRow = () => {
      return (this.state.customers.map((cust) => {
        return (
            <tr key={cust.id}>
                <td>{cust.id}</td>
                <td>{cust.name}</td>
                <td>{this.getPhoneToRender(cust.phone)}</td>
                <td>{cust.address.city}</td>
            </tr>
        );
    }));
  }
}
