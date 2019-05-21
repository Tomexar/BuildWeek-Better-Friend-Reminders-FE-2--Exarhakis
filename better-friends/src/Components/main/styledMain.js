import styled from 'styled-components';


const fadeColor = '#fafafa';
const loginColor = '#3f3d56';
const buttonColor = '#f4735c';
const backgroundColor = '#181a1b';


export const Button = styled.button`
width: 50%;
margin: auto;
padding:10px;
background:white;
border:1px solid grey;
cursor:pointer;
font-family: Work Sans, roboto;
`
export const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right:30px;
`;

export const CloseBtn = styled.button`
    background: white;
    border:1px solid grey;
    padding: 5px 10px;
    cursor:pointer;
`;

export const Title = styled.div`
    text-align: center;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    border:1px solid ${loginColor}
    width: auto;
    margin: 20px 10px;
    border-radius:10px;
`;

export const SelectContainer = styled.div`
    margin: 0 auto;
`;

export const Select = styled.select`
    border-radius:4px;
    border:1px solid black;
    margin-left:10px;
    padding: 5px 0;
`;

export const Card = styled.div`
position: relative;
width:80%;
margin: 30px auto;
background: ${loginColor};
border-radius: 8px;
padding: 0 20px;
color:white;
`;



export const Pen = styled.i`
    position: absolute;
    right: 5px;
    top: 5px;
  
`;

export const X = styled.i`
    position: absolute;
    right: 15px;
    top: 15px;
    
`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
`;

export const Input = styled.input`
text-align: center;
padding: 6px;
border: none;
margin:10px;
border-bottom: 1px solid grey;
font-size: 20px;
background-color: #0000;
font-family: Work Sans, roboto;
`;

export const Area = styled.textarea`
text-align: center;
padding: 6px;
margin: 10px;
border: none;
border-bottom: 1px solid grey;
font-size: 20px;
background-color: #0000;
font-family: Work Sans, roboto;
`;

export const Head = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 10px;
    align-items: baseline;    
`;

export const EventForm = styled.div`
    margin: 0 auto;
`;