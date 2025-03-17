import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    function dateCycle(holiday: string): string {
        if (holiday === "🎄") {
            return "🍀";
        } else if (holiday === "🍀") return "🐇";
        else if (holiday === "🐇") return "🎃";
        else if (holiday === "🎃") return "🦃";
        else return "🎄";
    }
    function alphabetCycle(holiday: string): string {
        if (holiday === "🎄") return "🐇";
        else if (holiday === "🐇") return "🎃";
        else if (holiday === "🎃") return "🍀";
        else if (holiday === "🍀") return "🦃";
        else return "🎄";
    }
    const [currentHoliday, setHoliday] = useState<string>("🎄");
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        setHoliday(alphabetCycle(currentHoliday));
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(dateCycle(currentHoliday));
                    }}
                >
                    Advance by Year
                </Button>
            </span>
            <span>Holiday: {currentHoliday}</span>
        </div>
    );
}
