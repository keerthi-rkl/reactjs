import React, { Component } from 'react';

class Card extends Component {
  render() {
    return <div>
        <div className="container ">
        <pre>{JSON.stringify(this.props.ok)}</pre>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-danger text-dark">
                               <h3>DETAILS</h3>
                               
                        </div>
                        <div className="card-body">
          
                          <ul className="list-group">
                          
                            <li className="list-group-item">{this.props.ok.email}</li>
                            <li className="list-group-item">{this.props.ok.name.first}</li>
                             
                             <li className="list-group-item">{this.props.ok.phone}</li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
  }
}

export default Card;
