import React, { useEffect, useState } from 'react';


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
      <h1>{champion.name}</h1> 
      <p>{champion.lore}</p>
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