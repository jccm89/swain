import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export function ChampionProfile({params}) {
  const [champion, setChampion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getChampion(){

      try{
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion/${params.name}.json`);

        if(!response.ok){
          throw Error(response.statusText);
        } 

        const data = await response.json();
        setChampion(Object.values(data.data)[0]);
        setLoading(false);

      }catch(error){
        setError(error);
        setLoading(false);
      }
      
    }

    getChampion();

  }, [params.name]);

  if(loading) return <Spinner />
  if(error) return <ErrorMessage message={error.message} />
  
  return (
    <>
      <CardChampion champion={champion}/>
    </>
    
  );
}

function Spinner(){
  return(
    <div className="spinner-border" role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  );
}

function ErrorMessage({message}){
  return(
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

function CardChampion({champion}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`} />
      <Card.Body>
        <Card.Title>{champion.name}</Card.Title>
        <Card.Text>
          {champion.lore}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}