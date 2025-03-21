import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

function chooseMember(
    team: string[],
    setTeam: (newValue: string[]) => void,
    newMember: string,
) {
    if (!team.includes(newMember)) {
        setTeam([...team, newMember]);
    }
}

function clearTeam(setTeam: (newValue: string[]) => void) {
    setTeam([]);
}

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);
    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(team, setTeam, option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button
                        onClick={() => {
                            clearTeam(setTeam);
                        }}
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
