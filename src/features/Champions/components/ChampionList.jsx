import { useEffect } from "react"
import { useState } from "react"

export default function ChampionList(){
    const [champions, setChampions] = useState([]); //useState es un hook que nos permite crear un estado en un componente funcional

    useEffect(() => {   

        const fetchData = async () => {
            const response = await fetch('https://la1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-63e26ccd-7f5b-4d7a-8036-bd0d46cfa366');
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