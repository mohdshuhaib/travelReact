import React, {useState} from "react";
import heart from '../assets/heart-solid.svg'
function Card(props) {
    let union = useState('add to excelentia')
    let activeClass = useState('')

    let [btnTextState, setBtnTextState] = union
    let [classState, setClassState] = activeClass

    function addToExcelentia (imgSrc){
        setBtnTextState((prevState) => {
            if (prevState === 'add to excelentia'){
                props.cardFn(imgSrc)
                return 'added to excelentia'
            }else {
                return 'add to excelentia'
            }
        })
        setClassState((prevClass) => {
            if (prevClass === ''){
                return 'active'
            }else {
                return ''
            }
        })
    }
  return (
    <div className={`card ${classState}`}>
      <img src={heart} alt="love" className="icon"/>
      <img src={props.cardContent.imgSrc} alt="Card" />
      <h3>{props.cardContent.name}</h3>
      <p>Ph: {props.cardContent.phone}</p>
      <p>Email: {props.cardContent.email}</p>
      <button onClick={() => {
        addToExcelentia(props.cardContent.imgSrc)
      }}>{btnTextState}</button>
    </div>
  );
}

export default Card;