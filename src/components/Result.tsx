import * as React from "react";

export type ResultProps = {
    counter: number;
}

export const Result = (props: ResultProps) => {
    return (
        <div>{props.counter}</div>
    );
}
