import { RingLoader } from "react-spinners";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Loader = () =>
{
    return(
        <>
        <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-12 d-flex align-items-center justify-content-center load">
                <RingLoader color="#fff" />
            </div>
        </div>
        </>
    );
}

export default Loader;