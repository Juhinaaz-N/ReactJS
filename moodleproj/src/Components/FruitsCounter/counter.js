import React,{useState} from 'react';
import './counter.css';
import 'bootstrap/dist/css/bootstrap.css'
function FruitsCounter(){
    const [count,setCount]=useState(0);
    const [counts,setCounts]=useState(0);
    return(
        <>
     <div className='counterbg p-5'>
     <div className='counterdiv bg-white text-center p-5'>
<h3 className='counterheading col-lg-12 col-md-12 col-sm-12 col-12'>BOB ate  <span className='counterspan'>{count}</span>mangoes <span className='counterspan'>{counts}</span>bananas</h3>
<div className='row container counterdiv1 justify-content-center'>
<div className='col-12 col-xl-5 col-lg-5 col-md-10 col-sm-10'>
<img src='https://thumbs.dreamstime.com/b/mango-ripe-white-background-35283521.jpg' className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 fruitimage'/><br/>
<button className="col-lg-6 col-md-12 btn btn-primary" onClick={()=>setCount(count+1)}>Eat Mango</button>
</div>
<div className='col-12 col-xl-5 col-lg-5 col-md-10 col-sm-10'>
<img src='https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=170667a&w=0&k=20&c=uiSdjIQkTr7S4gEdW_oB_5zfFYhpfe0LP-CryQl49w4=' className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 fruitimage'/><br/>
<button className="col-lg-6 col-md-12 btn btn-primary" onClick={()=>setCounts(counts+1)}>Eat Banana</button>
</div></div></div></div>
</>
);
}
export default FruitsCounter;