import React,{useState} from 'react';

function Hooks()
{
    const state=useState();
    const[count,setCount]=useState(0);
    function Daksh()   
    {
        setCount(count-1);
    };

    return(
        <>
            <div className="text-center" style={{color:"red"}}>
                <h1 className="display-1">{count} <img src='https://64.media.tumblr.com/a47fcce1e60213338a10ccb73bac0b43/c7b0b0d5a4c7dd72-d0/s400x600/eeef8144fa73301667a8167a5e92f97d239aa8c5.gifv'
                alt='https://64.media.tumblr.com/a47fcce1e60213338a10ccb73bac0b43/c7b0b0d5a4c7dd72-d0/s400x600/eeef8144fa73301667a8167a5e92f97d239aa8c5.gifv' height={200} width={200}/> 
                </h1>
                <button type="button" className="btn btn-danger btn-lg text-dark" onClick={Daksh}>Destroy process resumed</button>
            </div>
            
        </>
        
    );
};
export default Hooks;