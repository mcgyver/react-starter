import React from 'react';

class Programacao extends React.Component {
    render() {
        let text = "";
        const type = this.props.match.params.type;
        
        return (
            <div>{type}</div>
        )
    }
};

export default Programacao;