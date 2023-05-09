import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PeopleModal extends Component {
  render() {
    let peoplemodelStyle={
        display:"block",
        border:"none",
        backgroundColor : "#a4a5c5b7",
        
    }
    return (
      <div>
        <div className="modal show fade " style={peoplemodelStyle} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="text-right mr-4 mt-4">
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.props.hide}
                  
                >  </button>
                
              </div>
              <div className="modal-body">
                          <div className="text-center"><img  src={this.props.avatar_url} width="200" height='200' alt="" className="img-fluid rounded"/></div>
                          {/* <h5>{this.props.  }</h5> */}
                          </div>
                          <div className="ml-5 mr-3 mt-0 mb-0 text-primary">
                                <p className="text-primary text-capitalize ">Name : {this.props.login}</p>
                                <p className="text-primary">Email : {this.props.url}</p>
                                <p className="text-primary ">Type : {this.props.type}</p>
                                <p className="text-primary ">Birthdate : {this.props.type}</p>
                                <p className="text-primary ">Type : {this.props.type}</p>
                          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
