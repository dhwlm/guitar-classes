import React from 'react';
import {Link} from 'react-router-dom'
// import fire from '../fire';

class Student extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      totalSessions: props.data.totalSessions,
      feesPendingSessions: props.data.feesPendingSessions,
    }

    this.incrementSessions = this.incrementSessions.bind(this);
    this.decrementSessions = this.decrementSessions.bind(this);
    this.payFees = this.payFees.bind(this);
  }

  incrementSessions(){
    this.setState({
      totalSessions: this.state.totalSessions + 1,
      feesPendingSessions: this.state.feesPendingSessions + 1,
    });
  }

  decrementSessions(){
    this.setState({
      totalSessions: this.state.totalSessions - 1,
      feesPendingSessions: this.state.feesPendingSessions - 1,
    });
  }

  payFees(){
    this.setState({
      feesPendingSessions: this.state.feesPendingSessions - 4,
    });
  }

  render() {
    return (
      <div className="col-4">
        <div className="card mb-4 box-shadow ">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">
              <img src="#" alt="" className=" img-circle" />
              {this.props.data.firstName + " " + this.props.data.lastName }
            </h4>
          </div>
          <div className="card-body">
            <h1 className="card-title">
              <span className="border small text-muted px-2" onClick={this.decrementSessions}>-</span>
              {this.state.totalSessions}
              <span className="border small text-primary px-2 bg-primary" onClick={this.incrementSessions}>+</span>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Batch Time: <span className="text-info">{ this.props.data.batchTime }</span></li>
              <li>Batch Level: <span className="label label-primary">{ this.props.data.batchLevel }</span></li>
              <li>Added On: { this.props.data.addedOn } </li>
              <li>Fees Pending for Sessions: <span className="text-info">{this.state.feesPendingSessions}</span></li>
              <li>Key: {this.props.data.id} </li>
            </ul>
            <div className="btn-group btn-group-justified">
              <a className="btn" onClick={this.payFees}>Pay Fees</a>
              <a className="btn">Mark Present</a>
              <Link to={"edit/" + this.props.data.id} className="btn">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
