import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "./components/Button";
import { Result } from "./components/Result";

type AppState = {
    counter: number;
}

class App extends React.Component<undefined, AppState> {

    constructor() {
        super();
        this.state = { counter: 0 };
    }

    incrementCounter = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

    render() {
        return (
            <div>
                <Button onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("example"));
