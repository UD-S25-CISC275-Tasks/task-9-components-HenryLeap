import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [started, changeStarted] = useState<boolean>(false);
    const [attempts, changeAttempts] = useState<number>(4);
    return (
        <div>
            <Button
                onClick={() => {
                    changeStarted(true);
                    changeAttempts(attempts - 1);
                }}
                disabled={started || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    changeStarted(false);
                }}
                disabled={!started}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(attempts + 1);
                }}
                disabled={started}
            >
                Mulligan
            </Button>
            You have {attempts} attempts
        </div>
    );
}
