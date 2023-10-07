import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handlelowClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }
    const handleCopyClick=()=>{
        var texta=document.getElementById("mybox");
        texta.select();
        navigator.clipboard.writeText(texta.value);
        props.showAlert("successfuly copied!","success");
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const handleclearClick=()=>{
        setText("");
        props.showAlert("text cleared!","success");
    }
    const [text,setText] = useState("");
    // setText("kdsfdsfdf");
  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'black',padding:'5px'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>clear</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy</button>

</div>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} > 
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h2>preview</h2>
    <p>{text}</p>
</div>
    </>
  )
}
