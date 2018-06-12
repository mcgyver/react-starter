import React from "react";
import data from "../data.json";
import EventRow from './event/EventRow';

class Programacao extends React.Component {
    render() {
        let text = "";
        const type = this.props.match.params.type;

        return data.events.map(event => 
            <EventRow key={event.id} event={event}/>
        );
    }
}

export default Programacao;
