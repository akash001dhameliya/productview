
import { VscDebugBreakpointData } from "react-icons/vsc";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const Mainpage = () =>
{

    const [data,setdata] = useState([]);
    const [loder,setloder] = useState(true);
    const navigate = useNavigate();


    setInterval(()=> {
            setloder(false);
    },2500);

    useEffect(() => {
       
    axios.get('https://dummyjson.com/products')
    .then(function (response) {
        // handle success
        console.log(response.data.products);
        setdata(response.data.products);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
},[]);

const redirect = (id) =>
    {
        navigate(`/Render/${id}`)
    }


return(
    <>
        {
            (loder)
            ?
            <Loader/>
            :
            
            <div className="background p-md-5 p-sm-4 p-1">
            <div className="container">
                
                <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center ">
                {
                data.map((item) => {
                    return (
                    <>
                        <div className="col-xxl-4 col-lg-4 col-md-6" key={item.id}>
                            <div className="d-flex m-2 rounded-2 overflow-hidden flex-wrap main_card">
                                <div className="col-sm-12 col-12 img_hover">
                                    <img src={item.images[0]}  className=" rounded-top" alt="" style={{width:'100%',height:'100%'}}/>
                                </div>
                                <div className="col-sm-12 col-12 px-3">
                                    <div className="top py-2">
                                        <a href="#" className='fw-bolder fs-3 location_hover text-decoration-none'>
                                            <div><h1 onClick={()=>{redirect(item.id)}}>{item.brand}</h1></div>
                                        </a>
                                        <div className="fw-bold">
                                            
                                           
                                           <div className="middle py-2">
                                                 <div className="fw-bolder" style={{ color: '#fff' }}>Category:</div>
                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                <div>{item.category}</div>
                                                </a>
                                            </div>
                                            <div className="bottom py-2">
                                                <div className="fw-bolder" style={{ color: '#fff' }}>Description :</div>
                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                    <div>{item.description}</div>
                                                </a>
                                            </div>
                                            <div className="bottom py-2">
                                                <div className="fw-bolder" style={{ color: '#fff' }}>Discount :</div>
                                                <a href="#" className='location_hover text-decoration-none fw-bolder text-success'>
                                                    <div>{item.discountPercentage}%</div>
                                                </a>
                                            </div>
                                            <div className="bottom py-2">
                                                <div className="fw-bolder" style={{ color: '#fff' }}>Stock :</div>
                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                <div>
                                                    {
                                                    (item.stock>100) ? <VscDebugBreakpointData className='pe-1 fs-3 text-success'/>  : (item.stock<50) ? <VscDebugBreakpointData className='pe-1 fs-3 text-danger'/> : <VscDebugBreakpointData className='pe-1 fs-3 text-warning'/> 
                                                    } 
                                                        {item.stock} Units Left
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle py-2">
                                        <div className="fw-bolder" style={{ color: '#fff' }}>Product Price:</div>
                                        <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                            <div>{item.price}$</div>
                                        </a>
                                    </div>
                                    <div className="bottom py-2">
                                        <div className="fw-bolder" style={{ color: '#fff' }}>Ratings :</div>
                                        <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                            <div>{item.rating}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                })
                }
            </div>
        </div>
    </div>
        }
    </>
    );
}

export default Mainpage;