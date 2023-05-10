const React = require("react");

class StudentMoreInfoPage extends React.Component {
  render() {
    const studentInfo = require("../models/studentInfo");
    const studentName = this.props.name;
    const studentId = this.props.id;

    const result = studentInfo.filter((item) => item.name === studentName);


    //debug output
    // result.forEach((item) => console.log(item));
    // console.log("Name: " + studentName);
    // console.log("Id: " + studentId);
    // console.log("*******");
    //------

    if (studentName === result[0].name && studentId === result[0].id) {
      return (
        <div>
          <h1>{studentName}</h1>
          <div>Class of: {result[0].graduationYear}</div>
          <div>Program: {result[0].program}</div>
          <div>Bio: {result[0].desc}</div>
          <div><i>Would you like to connect with {studentName}?</i></div>
          <form action={`/students/contactInfo/${result[0].id}`}><button>Yes</button></form>
          {/* {`/students/contactInfo?id=${result[0].id}`} */}
        </div>
      );
    } else {
      return <div>Failed to find any information</div>;
    }
  }
}

module.exports = StudentMoreInfoPage;
