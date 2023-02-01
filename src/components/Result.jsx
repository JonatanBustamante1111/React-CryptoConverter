import styled from "@emotion/styled";
const Resultt = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    text-align: left;   
    padding: 5px;
    margin-top: 30px;
`
const List = styled.li`
    color: #6eb4fa;
    font-size: 18px;
    padding-top: 5px;
` 
const Img = styled.img`
    width: 100px;
    height: 100px;
`

const Result = ({result}) => {
    const {price, highday,lowday, mktcap,supply,imgurl} = result;
    return( 
        <Resultt>
            <div>
                <Img src={`https://cryptocompare.com/${imgurl}`}></Img>
            </div>
            <ul>
                <List>El precio del dia es de : 
                <span>{price}</span>
                </List>
                <List>
                El precio mas alto del dia es:
                <span>{highday}</span>
                </List>
                <List>
                El precio mas bajo del dia es:
                <span>{lowday}</span>
                </List>
                <List>
                La capitalizacion de mercado es:
                <span>{mktcap}</span>
                </List>
                <List>
                El suministro total de monedas es:
                <span>{supply}</span>
                </List>
            </ul>
        </Resultt>
    )
}
export default Result;