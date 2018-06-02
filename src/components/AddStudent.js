import React from 'react'
import fire from '../fire';
import _ from 'lodash';

class AddStudent extends React.Component {
  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      batchTime: '',
      batchLevel: '',
      mobile: '',
      totalSessions: '',
      feesPendingSessions: '',
      lastSessionOn: '',
      status:false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  componentWillMount(){
    let _this = this;
    if(this.props.location.pathname.indexOf('edit') > 0){
      fire.database().ref('students/' + this.props.match.params.id).once('value').then(function(snapshot) {
        _this.setState({
          firstName: snapshot.val().firstName,
          lastName: snapshot.val().lastName,
          email: snapshot.val().email,
          batchTime: snapshot.val().batchTime,
          batchLevel: snapshot.val().batchLevel,
          mobile: snapshot.val().mobile,
          totalSessions: snapshot.val().totalSessions,
          feesPendingSessions: snapshot.val().feesPendingSessions,
          lastSessionOn: snapshot.val().lastSessionOn,
          status:snapshot.val().status,
        });
      });
    }
  }

  addStudent(e){
    e.preventDefault();
    const studentRef = fire.database().ref('students');
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email:this.state.email,
      batchTime: this.state.batchTime,
      batchLevel: this.state.batchLevel,
      mobile: this.state.mobile,
      totalSessions: this.state.totalSessions || 1,
      feesPendingSessions: this.state.feesPendingSessions || 1,
      lastSessionOn: this.state.lastSessionOn || '',
      addedOn:  _.now(),
      imagePath: 'avatar.jpg',
      status: true
    }
    studentRef.push(student);
    // const pushRef = studentRef.push(student);
    // const userKey = pushRef.key;

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      batchTime: '',
      batchLevel: '',
      mobile: '',
      totalSessions: '',
      feesPendingSessions: '',
      lastSessionOn: '',
      status:false,
    });
    this.props.history.push('/');
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render () {
    return <div className="container">
      <div className="row">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Add Student</h4>
          <form className="needs-validation" onSubmit={this.addStudent} noValidate autoComplete="off">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" onChange={this.handleChange} value={this.state.firstName} required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" onChange={this.handleChange}  value={this.state.lastName} required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={this.state.email} onChange={this.handleChange} />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="batchTime">Batch Time</label>
                <select className="custom-select d-block w-100" id="batchTime" value={this.state.batchTime} required onChange={this.handleChange}>
                  <option value="">Choose...</option>
                  <option value="10 AM">10 AM</option>
                  <option value="11 AM">11 AM</option>
                  <option value="12 PM">12 PM</option>
                  <option value="1 PM">1 PM</option>
                  <option value="2 PM">2 PM</option>
                  <option value="3 PM">3 PM</option>
                  <option value="4 PM">4 PM</option>
                  <option value="5 PM">5 PM</option>
                  <option value="6 PM">6 PM</option>
                  <option value="7 PM">7 PM</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid batch time.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="batchLevel">Batch Level</label>
                <select className="custom-select d-block w-100" id="batchLevel" value={this.state.batchLevel} required onChange={this.handleChange}>
                  <option value="">Choose...</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="E+">E+</option>
                  <option value="E">E</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid batch level.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" className="form-control" id="mobile" value={this.state.mobile} required onChange={this.handleChange}/>
                <div className="invalid-feedback">
                  Please enter a valid mobile number for shipping updates.
                </div>
              </div>
            </div>

            <hr className="mb-4"/>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="totalSessions">Previous Total Sessions</label>
                <input type="number" className="form-control" id="totalSessions" value={this.state.totalSessions} required onChange={this.handleChange}/>
                <div className="invalid-feedback">
                  Please enter a valid totalSessions number for shipping updates.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="feesPendingSessions">Previous Fees Pending</label>
                <input type="number" className="form-control" id="feesPendingSessions" value={this.state.feesPendingSessions} required onChange={this.handleChange} />
                <div className="invalid-feedback">
                  Please enter a valid feesPendingSessions number for shipping updates.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="lastSessionOn">Last Session On</label>
                <input type="date" className="form-control" id="lastSessionOn" value={this.state.lastSessionOn} required onChange={this.handleChange}/>
                <div className="invalid-feedback">
                  Please enter a valid lastSessionOn number for shipping updates.
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Add Student</button>
          </form>
        </div>
      </div>
    </div>
  }
}

export default AddStudent;
