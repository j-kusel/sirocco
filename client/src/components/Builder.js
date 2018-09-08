import React, { Component } from 'react';
import axios from 'axios';

class Builder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: '',
            length: '',
            bars: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleLength = this.handleLength.bind(this);
        this.build = this.build.bind(this);

    } 

    build() {
        let ticks = 4. * this.state.length;
        let increment = (this.state.end - this.state.start)/ticks;
        let n = this.state.start;
        let total = 0.0;

        while (n !== this.state.end) {
            total += 60000.0/(n*4.0);
            n+=increment;
        }
        axios.post('http://localhost:8000/api/measures', {
            start: this.state.start,
            end: this.state.end,
            beats: this.state.length,
            time: total
        })
        .then(res => console.log(res.data));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.build();
    }

    handleStart(event) {
        let start = parseFloat(event.target.value);
        this.setState((oldState) => ({start: start}));
    }

    handleEnd(event) {
        let end = parseFloat(event.target.value);
        this.setState((oldState) => ({end: end}));
    }

    handleLength(event) {
        let len = parseFloat(event.target.value);
        this.setState((oldState) => ({length: len}));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="start" value={this.state.start} onChange={this.handleStart} />
                    <input type="text" placeholder="end" value={this.state.end} onChange={this.handleEnd} />
                    <input type="text" placeholder="length" value={this.state.length} onChange={this.handleLength} />
                    <input type="submit" value="Build" />
                </form>
            </div>
        )
    }
}

export default Builder;
