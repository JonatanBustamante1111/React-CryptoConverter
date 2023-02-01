import styled from "@emotion/styled";
const Err = styled.div`
    background-color:red;
    color:black;
    text-transform: uppercase;
    font-size: 10px;
    border-radius: 7px;
    text-align: center;
    padding: 5px;
`

const Error = () => {
    return (
        <Err>
            <h1>
                Todos los campos son obligatorios   
            </h1>
        </Err>
    ) 
}

export default Error;