import styled from '@emotion/styled';
import imgCrypto from './img/imagen-criptos.png' ;
import Form from './components/Form';
import Result from './components/Result';
import { useState, useEffect } from 'react';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
  `
const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block; 
` 
const Heading = styled.h1`
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content : '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto; 

  }
  `
function App() {
  const [coins,setCoins] = useState({});
  const [result,setResult] = useState({});
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if(Object.keys(coins).length > 0 ){

      const cotizarCryptos = async() => {
        setLoading(true);
        setResult({});
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.crypto}&tsyms=${coins.state}`;
        const response = await fetch(url);
        const result = await response.json();
        const objectCotizacion = {
          price : result.DISPLAY[coins.crypto][coins.state].PRICE,
          highday : result.DISPLAY[coins.crypto][coins.state].HIGHDAY,
          lowday : result.DISPLAY[coins.crypto][coins.state].LOWDAY,
          mktcap : result.DISPLAY[coins.crypto][coins.state].MKTCAP,
          supply : result.DISPLAY[coins.crypto][coins.state].SUPPLY,
          imgurl : result.DISPLAY[coins.crypto][coins.state].IMAGEURL
        }
        setResult(objectCotizacion);
        setLoading(false);
      }
      cotizarCryptos();
    }
  }, [coins])

  return (
    <Container>
    <Img 
      src={imgCrypto}
      alt="imagenes criptomonedas"
    />
    <div>
    <Heading>Cotiza cryptos al instante</Heading>
    <Form setCoins={setCoins} />
    {loading  && <Spinner />}
    { result && result.price && <Result result={result}/>}
    </div>
    </Container>
  )
}

export default App;
