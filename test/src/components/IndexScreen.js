import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';

export default class IndexScreen extends PureComponent {
    static propTypes = {
        titleName: PropTypes.string.isRequired,
        changeTitle: PropTypes.func.isRequired,
    }

    static defaultProps = {
        titleName: 'Bien venidos',
    }

    constructor(props) {
        super(props);

        this.state = {
            textValue: ''
        };
    }

    _handleOnChange = (e) => {
        this.setState({
            textValue: e.target.value,
        });
    }

    _handleOnClick = () => {
        let {changeTitle} = this.props;
        let {textValue} = this.state;

        changeTitle(textValue);
    }

    render() {
        let {titleName} = this.props;
        let {textValue} = this.state;

        console.log(textValue);

        return (
            <div>
                <h1 className="title">{titleName}</h1>
                <input type="text" onChange={this._handleOnChange}/>
                <p>
                    <button onClick={this._handleOnClick}>Change title name</button>
                </p>
            </div>
        )
    }
};
