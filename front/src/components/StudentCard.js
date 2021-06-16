import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";

/**
 *Component StudentCard
 */
export default function StudentCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div onClick={() => {
            setIsFlipped(!isFlipped)
        }}>
            <ReactCardFlip isFlipped={isFlipped}>
                <Card
                    bg={"dark"}
                    text={'white'}
                    className={"mb-2"}
                >
                    <Card.Img variant="top" src={props.image} />
                    <Card.Header>{props.name}</Card.Header>
                </Card>

                <Card
                    bg={"dark"}
                    text={'white'}
                    className={"mb-2"}
                >
                    <Card.Header>Name : {props.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            House : {props.house}
                        </Card.Text>
                        <Card.Text>
                            Patronus : {props.patronus !== "" ? props.patronus : "No Patronus"}
                        </Card.Text>
                        <Card.Text>
                            Ancestry : {props.ancestry !== "" ? props.ancestry : "No Ancestry"}
                        </Card.Text>
                        <Card.Text>
                            Actor : {props.actor}
                        </Card.Text>
                        <Card.Text>
                            Alive : {!props.alive ? "Dead" : "Alive"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ReactCardFlip></div>
    );
}