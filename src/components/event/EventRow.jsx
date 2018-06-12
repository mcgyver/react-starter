import React from 'react';

class EventRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: props.event
        }
    }

    render() {
        return (
            <div  id={this.state.event.id}>{this.state.event.description} - {this.state.event.link} </div>
        );
    }
}

export default EventRow;