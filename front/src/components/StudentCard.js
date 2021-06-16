import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import {faDizzy} from "@fortawesome/free-regular-svg-icons/faDizzy";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons/faUserGraduate";

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
                    <Card.Header>
                        <div style={{
                            width: 150,
                            height: 150,
                            overflow: 'hidden',
                            borderRadius: 10,
                            margin: "auto"
                        }}>
                            <Image src={props.image} alt={"face"} style={{width: 150, height: "auto"}}/>

                        </div>
                        {props.name}
                        {!props.alive &&
                        <FontAwesomeIcon icon={faDizzy}/>
                        }
                    </Card.Header>
                </Card>

                <Card
                    bg={"dark"}
                    text={'white'}
                    className={"mb-2"}
                >
                    <Card.Header>Name : {props.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p> House : {props.house}</p>
                            <p> School's status : {props.hogwartsStudent ? "student" : props.hogwartsStaff ? "staff" : "Not in Hogwarts"}</p>
                            <p> Patronus : {props.patronus !== "" ? props.patronus : "No Patronus"}</p>
                            <p> Ancestry : {props.ancestry !== "" ? props.ancestry : "No Ancestry"}</p>
                            <p> Actor : {props.actor}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ReactCardFlip></div>
    );
}