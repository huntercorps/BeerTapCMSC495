import React, {Component} from 'react';

class Slider extends Component {
    componentWillMount(props) {
        this.setState({
            slider : 2
        });
    }


    render() {
        return (
                <input type="range" className="custom-range mt-3" id="customRange"
                       min="1" max="5" step="0.5"
                       value={this.state.slider}
                       onChange={event => this.setState({ slider: event.target.value })} >
                </input>
        );
    }
}

export default Slider;
