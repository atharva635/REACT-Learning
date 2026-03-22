import React,{useState} from 'react';

function MyComponent(){
    const [cars,setcars] = useState([]);
    const [carYear,setcarYear] = useState(new Date().getFullYear());
    const [carMake,setcarMake] = useState([]);
    const [carModel,setcarmodel] = useState([]);

    function handleAddCar(){
        
    }
    function handleRemoveCar(index){

    }
    function handleYearChange(event){

    }
    function handleMakeChange(event){

    }
    function handleModelChange(event){

    }

    return (<div>
        <h2>List Of Cars: </h2>
    </div>);
}
export default MyComponent