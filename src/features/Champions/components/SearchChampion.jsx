import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import { ChampionCard } from "./ChampionCard"
import { useEffect } from "react"
import { useState } from "react"

export function SearchChampion()
{

    const [champions, setChampions] = useState([]);
    const [value, setValue] = useState("");
    
    useEffect(() => {
        async function getChampions(){
            const response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json");
            const data = await response.json();
            setChampions(Object.values(data.data));
        }

        getChampions();
    }, [])

    function handleChange(e){
        setValue(e.target.value);
    }

    const filteredChampions = champions.filter(champion => {
       return champion.name.toLowerCase().includes(value.toLowerCase());
    });

    return(
        <Container>
            <Row>
                <Col md="12">
                    <Form.Control size="lg" type="text" placeholder="Buscar..." value={value} onChange={handleChange}/>
                </Col>
            </Row>
            <br />
            <Row>
                {
                    filteredChampions.map(champion => {
                        return(
                            <ChampionCard champion={champion} key={champion.key}/>
                    )})
                }
            </Row>
        </Container>
    );

}