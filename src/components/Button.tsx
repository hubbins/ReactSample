import * as React from "react";

type ButtonState = {}
type ButtonProps = { 
    onClickFunction: any 
}

export class Button extends React.Component<ButtonProps, ButtonState> {

    render() {
        return (
            <button onClick={this.props.onClickFunction} >
                +1
            </button>
        )
    }
}
