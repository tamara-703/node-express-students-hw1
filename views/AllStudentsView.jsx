const React = require('react');

class AllStudentsView extends React.Component {

    render()
    {
        const students = this.props.students;
        return (
            <div>
                <h1>Get to know our wonderful students by clicking on their name!</h1>
                {students ?

                    students.map((student, i) => {
                        return (
                            <div>
                                <a href= {`/students/${i}`}><h4>{student.name}</h4></a>
                            </div>
                        )
                    })





                : <div>no information found. Please refresh the page or go back to the homepage</div>}
            </div>
        )
    }
}

module.exports = AllStudentsView;
