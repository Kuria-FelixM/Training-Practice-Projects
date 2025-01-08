import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian(){
   
   const [selected,setSelected] = useState(null);
   const [enableMultisection,setEnableMultiselection] = useState(false);

   function handleSingleSelection(grtCurrentId){
    console.log(grtCurrentId);
    setSelected(grtCurrentId === selected ? null : grtCurrentId);

   }
   
    return <div className="wrapper">
        <button>Enable Multiselection</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className="item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)}className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="content">{dataItem.answer}</div>
                        : null
                    }
                </div>)
                : <div>No data Presnt!</div>
            }

        </div>
            
    </div>

}