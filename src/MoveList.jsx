import React from 'react';
import './App.css';

export class MoveList extends React.Component {
    constructor(props) {
        super(props);
        this.createMoveList = this.createMoveList.bind(this);        
    }

    createMoveList() {
        console.log("Inside of createMoveList");
        let calcMoveList = this.props.calculatedMoves;
        let displayList = [];
        calcMoveList.foreach(element => {
            console.log(element.move);
            displayList.push(
                <li className="moveItem">
                   <b>{element.move}</b>
                </li>
            );
        });
        return displayList;
    }

    render() {
        let displayList = this.createMoveList();
        return (
            <ol className="moveList">
                {displayList}
            </ol>
        );
    }
}

export default MoveList;
