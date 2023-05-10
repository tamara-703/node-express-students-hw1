const React = require("react");

class ShowStudent extends React.Component {
  render() {
    const student = this.props.student;
    return (
      <div>
        {student ? (
          <div>
            <img src={student.image} alt="student-photo" width="400px"></img>
            <div>{student.name}</div>
            <div>{student.class}</div>
            <div>{student.program}</div>
            Find out more about {student.name}{" "}
            <a href={`/students/${student.name}/${student.id}`}>here!</a>
          </div>
        ) : (
          <div>
            no information found. Please try refreshing the page or going back
            to the homepage.
          </div>
        )}
      </div>
    );
  }
}

module.exports = ShowStudent;
