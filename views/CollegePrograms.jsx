const React = require('react');

class CollegePrograms extends React.Component {

    render()
    {
        const programs = this.props.programs;
        console.log(programs)
        return (
            <div>{programs ? programs.map((program, i) => {
                return (<div>Program name: {program}</div>)
            }) : <div>no information found. Please try refreshing the page or going back to the homepage</div>}</div>
        )
    }
}

module.exports = CollegePrograms;
