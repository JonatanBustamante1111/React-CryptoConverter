import styled from '@emotion/styled';

const Label = styled.label`
    color: white;
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    margin: 10px 0 ;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 10px;
`
    const SelectMonedas = ({monedas,setState, label}) => {
        return(
        <>
           <Label>{label}</Label>
           <Select 
                onChange={ e => setState(e.target.value) }
           >
            <option value=""
            >
                seleccione
            </option>
            {monedas.map(element => 
                <option  
                    value={element.id}
                    key={element.id}
                >
                    {element.name}
                </option>
                )}
           </Select>
        </>
    )
}
export default SelectMonedas;