import { useEffect } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import {monedas} from "../data/monedas"
import SelectCryptos from "../components/SelectCryptos"
import SelectMonedas from "./SelectMonedas";
import Error from "./Error";

const InputSubmit = styled.input`
    width: 100%;
    border: none;
    padding: 10px;
    font-size: 20px;
    background-color: #9497FF;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 5px;
    margin-top: 30px ;
    transition: background-color .3s;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
    `

const Form = ({setCoins}) => {
    const [state, setState] = useState(''); 
    const [cryptos,setCryptos] = useState([]);
    const [crypto,setCrypto] = useState('');
    const [error,setError] = useState(false);

    useEffect( () => {
            const getFetch = async () => {
                const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD'
                
                const response = await fetch(url);
                const result = await response.json()
                const arrayCryptos = result.Data.map(element => {
                   const objectCryptos = {
                       id: element.CoinInfo.Name,
                       name: element.CoinInfo.FullName 
                    }   
                    return objectCryptos;
                }) 
                setCryptos(arrayCryptos)
            }
             getFetch();
        },[])

        const handleSubmit = e => {
            e.preventDefault();
            if([state,crypto].includes('')){
                setError(true);
                return;
            }
            setError(false);
            setCoins({
                state,
                crypto
                })
            }
    return (
        <>
            {
                error && <Error/>
            }
            <form onSubmit={handleSubmit}>
                <SelectMonedas monedas={monedas} setState={setState} label={'Seleccione su moneda'}/>
                {cryptos && cryptos.length > 0 ? <SelectCryptos cryptos={cryptos} setCrypto={setCrypto} label={'Seleccione su crypto'}/>  :<h1>cargando...</h1>}
                <InputSubmit type="submit" value="Cotizar"/>
            </form>
        </>
    )
}

export default Form;