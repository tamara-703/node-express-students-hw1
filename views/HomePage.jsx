const React = require("react");

class HomePage extends React.Component {


    render()
    {
        return (
            <div>
                <h3><a href="/about">about page</a></h3>
                <h3><a href="/programs">view our programs</a></h3>
                <h3><a href="/students">our students</a></h3>
                <h3><a href="/contact">contact us</a></h3>
            </div>
        )
    }
}

module.exports = HomePage;
