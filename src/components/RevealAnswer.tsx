import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    Reveal Answer
                </Button>
            </span>
            {visible && <span>42</span>}
        </div>
    );
}
