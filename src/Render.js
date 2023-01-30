import React from 'react';
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

export const Render = () => {

    const { id } = useParams();

    const [data, setdata] = useState([]);
    const [loder, setloder] = useState(true);
    const [val1, setval1] = useState(false);

    setInterval(() => {
        setloder(false);
    }, 1000);

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                setdata(response.data);
                setval1(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    if (val1) {

        return (
            <>
                <>
                    <div className="background p-md-5 p-sm-4 p-1">
                        <div className="container">
                            <div className="row d-flex justify-content-xxl-between justify-content-lg-center justify-content-xl-between align-items-center ">
                                <div className="col-xxl-12 col-lg-12 col-md-12 d-flex justify-content-center">
                                    <div className="d-flex col-8 m-2 rounded-2 overflow-hidden flex-wrap main_card ">
                                        <div className="col-sm-12 col-12 img_hover">
                                            {/* <img src={data.thumbnail}></img> */}
                                            <h1>{data.title}</h1>
                                            
                                            <div>
                                                {
                                                    data.images.map((item) => {
                                                        return (
                                                            <>
                                                                <img src={item} className=" rounded-4 p-3" alt="" style={{ width: '100%', height: '100%' }}></img>
                                                            </>
                                                        );
                                                    })
                                                }
                                                <div className="col-sm-12 col-12 px-3">
                                                    <div className="top py-2">
                                                        <a href="#" className='fw-bolder fs-3 location_hover text-decoration-none'>
                                                            <div>{data.brand}</div>
                                                        </a>
                                                        <div className="fw-bold">
                                                            <div className="middle py-2">
                                                                <div className="fw-bolder" style={{ color: '#fff' }}>Category:</div>
                                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                                    <div>{data.category}</div>
                                                                </a>
                                                            </div>
                                                            <div className="bottom py-2">
                                                                <div className="fw-bolder" style={{ color: '#fff' }}>Description :</div>
                                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                                    <div>{data.description}</div>
                                                                </a>
                                                            </div>
                                                            <div className="bottom py-2">
                                                                <div className="fw-bolder" style={{ color: '#fff' }}>Discount :</div>
                                                                <a href="#" className='location_hover text-decoration-none fw-bolder text-success'>
                                                                    <div>{data.discountPercentage}%</div>
                                                                </a>
                                                            </div>
                                                            <div className="bottom py-2">
                                                                <div className="fw-bolder" style={{ color: '#fff' }}>Stock :</div>
                                                                <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                                    <div>
                                                                        {
                                                                            (data.stock > 100) ? <VscDebugBreakpointData className='pe-1 fs-3 text-success' /> : (data.stock < 50) ? <VscDebugBreakpointData className='pe-1 fs-3 text-danger' /> : <VscDebugBreakpointData className='pe-1 fs-3 text-warning' />
                                                                        }
                                                                        {data.stock} Units Left
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="middle py-2">
                                                        <div className="fw-bolder" style={{ color: '#fff' }}>Product Price:</div>
                                                        <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                            <div>{data.price}$</div>
                                                        </a>
                                                    </div>
                                                    <div className="bottom py-2">
                                                        <div className="fw-bolder" style={{ color: '#fff' }}>Ratings :</div>
                                                        <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                                            <div>{data.rating}</div>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
        );
    }
    else {
        return (
            <>
                <h1>Data is Not Founded.</h1>
            </>
        );
    }

}

export default Render;