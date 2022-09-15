import React, {useState} from 'react'


export default function TextForm( props) {

   const stylea={
    backgroundColor: props.mode==='dark'?'gray':'white' ,
    color: props.mode==='dark'?'white':'#042743' 


};
    const handleUpClick = ()=>{
        console.log(text);
        setText(text.toUpperCase())
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handlelowerClick=()=>{
        setText(text.toLocaleLowerCase());
    }
    const handleclearClick=()=>{
        setText("");
    }
    const copytext=()=>{
     var text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
    }
    const removeextra=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const dummmydata=()=>{
  setText("Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias, exercitationem ut deleniti ducimus totam hic fugiat minus quibusdam iste. Modi ipsum, dignissimos perspiciatis excepturi nobis sint commodi numquam cumque enim vel, minus impedit.")
    }
  
    const [text, setText] = useState(''); 
  
    return (
        < > 
         
            <div className=" container "> 
            <h3><center className="m-3" >Enter the text below</center></h3>
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={stylea}
          
            ></textarea>
            <button className="btn btn-outline-primary m-3 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-primary m-3" onClick={handlelowerClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-primary m-3"  onClick={handleclearClick}>Clear text Area</button>
            <button className="btn btn-outline-primary m-3 "  onClick={copytext}>Copy text </button>
            <button className="btn btn-outline-primary m-3 "  onClick={removeextra}>Remove extra space </button>
            <button className="btn btn-outline-primary m-3 "  onClick={dummmydata}>Create dummy data </button>
            </div>
            <hr />
            
            <div className="container">
                <h3 className="mb-3">Summery</h3>
                <p>Words: {text.split(' ').length}</p>
                <p>Characters: {text.length} </p>
                <p>Avrage reading time :{(text.length)/1000} min</p>
            </div>
            <hr />
            <div className="container">
                <h3>Live Preview</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange}  rows='8' style={stylea}>  </textarea>         
                   </div>
        </>
    )
}