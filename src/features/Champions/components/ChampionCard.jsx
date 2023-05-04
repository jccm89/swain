import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'wouter';
import { useState } from 'react';

export function ChampionCard({champion})
{
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

    return(
        <Col xs="4" md="1" lg="1">
            <Link to={`/champions/profile/${champion.name}`} >
                <Image src={`http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${champion.image.full}`} 
                    rounded
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}
                    style={{ cursor: hover ? "pointer" : "default" }}
                    />
            </Link>
            {champion.name}
        </Col>
    );
}