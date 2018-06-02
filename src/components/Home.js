import React from 'react'
import fire from '../fire';
import Student from './Student'

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      studentData:[]
    }
  }

  componentWillMount(){
    const dbRef = fire.database().ref().child('students');
    dbRef.on('value', snapshot => {
      let studentData = []
      snapshot.forEach(child => {
        studentData.push({
          id: child.key,
          firstName: child.val().firstName,
          lastName: child.val().lastName,
          batchTime: child.val().batchTime,
          batchLevel: child.val().batchLevel,
          addedOn: child.val().addedOn,
          totalSessions: child.val().totalSessions,
          feesPendingSessions: child.val().feesPendingSessions,
          lastSessionOn: child.val().feesPendingSessions,
        });
      });

      this.setState({
        studentData: studentData
      });
    });
  }

  render () {
    const ListItems = this.state.studentData.map((data,i) => {
      return(
        <Student data={data} key={data.id} />
      );
    });
    return <div className="container">
      <div className="row text-center">
        { ListItems }
      </div>
    </div>
  }
}

export default Home;
