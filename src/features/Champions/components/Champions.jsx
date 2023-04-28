import { useEffect } from "react"
import { useState } from "react"

export function Champions(){
    const [champions, setChampions] = useState([]); //useState es un hook que nos permite crear un estado en un componente funcional

    useEffect(() => {   

        const fetchData = async () => {
            const response = await fetch('https://la1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-2827c3f5-15aa-40be-8ae3-8502a17c3869');
            const data = await response.json();

            if (!ignore) {
                setChampions(data.freeChampionIds);
              }
        };

        let ignore = false;
        fetchData();

        return () => { ignore = true; };

    }, [])

    const championsList = champions.map((champion) => <h6 key={crypto.randomUUID()}>{champion}</h6>);

    return (
        <>
            {championsList}
        </>
    )
}