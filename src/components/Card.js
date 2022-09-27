
import React from 'react'
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
function Card({ data }) {
   


    return <>
        <div className=' col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 w-auto'>
            <div style={{ width: "18rem"}} className=" d-flex justify-content-center">
                <div  style={{backgroundColor:"white",borderRadius:"10px"}}>
                <img src={data.bookUrl} alt="img" style={{ width: "15rem",height:"20rem",borderRadius:"10px" }} />
                <div >
                    <h6 className="text-center mt-1 ">{data.bookName}</h6>
                    
                    <h3 className="text-center"><Rating name="half-rating-read" defaultValue={data.Rating} precision={0.5} readOnly /></h3>
                    { data.currentStock === "In Stock" ? <h6 className="text-center text-primary">{data.currentStock}</h6> : <h6 className="text-center text-dark">{data.currentStock}</h6>}
                    
                    <div className=' d-flex justify-content-center'>
                    <Link to={`/portal/view-book/${data.id}`} > <button  class="btn mb-2"  style={{backgroundColor:"#b2bec3", color:"black"}}>View</button> </Link>
                      
                    </div>
                </div>

                


                </div>
            </div>

        </div>
    </>
}

export default Card
