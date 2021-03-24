import React from 'react';

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
		this.onOptionChange = this.onOptionChange.bind(this);
		this.getOptionList = this.getOptionList.bind(this);

        this.state = {
            uid: ""
        };
    }

    onOptionChange(event) {
        this.setState({
            option: event.target.value
        });
        this.props.getOption(event.target.value);
    }

    getOptionList(names) {
        let optionsList = [];
        names.forEach(element => (
            optionsList.push(
                <option name={element} key={element}>{element}</option>
            )
        ));
        return optionsList;
    }

    /*shouldComponentUpdate() {
        return (this.state.gen)
    }*/

    componentDidMount() {
        this.setState({
            optionsList: this.getOptionList(this.props.names)
        })
    }

    render() {
        let optionsList = this.state.optionsList;

        return (
            <select value={this.state.option} onChange={this.onOptionChange}>
                {optionsList}
            </select>
        );
    }
}

export default Dropdown;