import React, { Component } from 'react';
import './App.css';

const alphabet = [
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zeta',
    'eta',
    'theta',
    'iota',
    'kappa',
    'lambda',
    'mu',
    'nu',
    'xi',
    'omicron',
    'pi',
    'rho',
    'sigma',
    'tau',
    'upsilon',
    'phi',
    'chi',
    'psi',
    'omega',
];

class App extends Component {
    constructor() {
        super();
        this.state = { progress: 0 };
    }

    render() {
        function keypress(e) {
            if (e.key == 'Enter') {
                const input = e.target.value.toLowerCase();
                const { progress } = this.state;

                e.target.value = '';

                if (progress == alphabet.length) {
                    this.setState({ progress: 0 });
                    return;
                }

                if (input == alphabet[progress]) {
                    this.setState({ progress: progress + 1 });
                } else {
                    this.setState({ progress: 0 });
                }
            }
        }

        let placeholder =
            'What comes after ' + alphabet[this.state.progress - 1] + '?';
        if (this.state.progress == 0) placeholder = "What's the first letter?";
        if (this.state.progress == alphabet.length) placeholder = 'You did it!';

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Greek Alphabet</h1>
                </header>
                <p className="App-intro">
                    <input
                        type="text"
                        onKeyPress={keypress.bind(this)}
                        placeholder={placeholder}
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                    />
                    <b>
                        {this.state.progress}/{alphabet.length}
                    </b>
                    <ul>
                        {alphabet
                            .slice(0, this.state.progress)
                            .map(l => <li key={l}>{'\u2713' + l}</li>)}
                    </ul>
                </p>
            </div>
        );
    }
}

export default App;
