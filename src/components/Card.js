import star from '../images/Star 1.png'
import './Card.css'
function Card(props)
{
    return(<div className="card">
        {  (props.slot === 0)&&<div className='vacancy'>Sold OUT BRo</div>}
        <img src={props.img} className = 'mainimg'></img>
             
        <div className='rating'>
            <img src={star} className='star'></img>
            <span>{props.rating} </span>
            <span>{props.reviewCnt}</span>
            <span>{props.country}</span>
        </div>
        <div className="Title">
        <span>{props.title} </span>
        <span >From {props.price}/ person</span> </div>
        <button className="btn" type="submit"> Book Appointment</button>
               
    </div>);
}

export default Card

