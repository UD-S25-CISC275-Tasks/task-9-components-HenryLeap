import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");
    function typeChange(): void {
        if (type === "short_answer_question") {
            changeType("multiple_choice_question");
        } else {
            changeType("short_answer_question");
        }
    }
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        typeChange();
                    }}
                >
                    Change Type
                </Button>
            </span>
            {type === "short_answer_question" && <span>Short Answer</span>}
            {type === "multiple_choice_question" && (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
