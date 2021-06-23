import React from 'react';
import ReactDOM from 'react-dom';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.jpg'
import image12 from './images/image11.jpg'
// import './images'

import './index.css'

 const eachBook =[
 {
   id:1,
   img: image1,
   title:"Time for School, Little Blue Truck ",
   author: "by Alice Schertle" ,
   price:"$10.77 " ,
   oldPrice: "$18.99" ,
   Shipping: "+ $18.48 shipping",
   releaseDay:"Arrives: Wednesday, July 14." ,
 },
 {
  id:2,
  img: image2,
  title:"Eyes That Kiss in the Corners",
  author: "by Joanna Ho" ,
  price:"$11.33 " ,
  oldPrice: "$17.99 " ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Wednesday, July 14." ,
},
 {
  id:3,
  img: image3,
  title:"I'm a Hare, So There!",
  author: "by Julie Rowan-Zoch" ,
  price:"$16.19 " ,
  oldPrice: "$17.99 " ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13." ,
}, 
 {
  id:4,
  img: image4,
  title:"Ambitious Girl",
  author: "by Meena Harris" ,
  price:"$9.37 " ,
  oldPrice: "$18.99 " ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Wednesday, July 14." ,
},
 {
  id:5,
  img: image5,
  title:"Outside, Inside",
  author: "by LeUyen Pham" ,
  price:"$16.46" ,
  oldPrice: "$18.99 " ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:6,
  img: image6,
  title:"The Bruce Swap",
  author: "by Ryan Higgins" ,
  price:"$15.49" ,
  oldPrice: "$17.99" ,
  Shipping: " + $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:7,
  img: image7,
  title:"How to Catch a Clover Thief",
  author: "by Elise Parsley" ,
  price:"$15.99" ,
  oldPrice: "$17.99" ,
  Shipping: "+ $18.48 shipping",
  releaseDay:" " ,
},
 {
  id:8,
  img: image8,
  title:"I Am Smart, I Am Blessed, I Can Do Anything!",
  author: "by Alissa Holder" ,
  price:" $13.48 " ,
  oldPrice: "$17.99" ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:9,
  img: image9,
  title:"Are You a Cheeseburger?",
  author: "by Monica Arnaldo" ,
  price:"$14.13" ,
  oldPrice: "$17.99" ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:10,
  img: image10,
  title:"It's So Quiet:A Not-Quite-Going-to-Bed Book",
  author: "by Sherri Duskey Rinker" ,
  price:"$14.29" ,
  oldPrice: "$17.99" ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:11,
  img: image11,
  title:"A New Day",
  author: "by Brad Meltzer" ,
  price:"$14.48" ,
  oldPrice: "$17.99" ,
  Shipping: "+ $23.08 shipping",
  releaseDay:"Arrives: Tuesday, July 13" ,
},
 {
  id:12,
  img: image12,
  title:"The Worm Family Has Its Picture Taken",
  author: "by Jennifer Frank" ,
  price:"Temporarily out of stock." ,
  oldPrice: "" ,
  Shipping: "",
  releaseDay:"Temporarily out of stock." ,
}
 
]

 const Book = ({ img, title, author, price, oldPrice, Shipping, releaseDay})=>{
  // const Book = (props)=>{
    const [like, setLike] = React.useState(0);
  //  const { img, title, author, price, CancelledPrice, Shipping, releaseDay} = props.eachBook
    return (
      // <React.Fragment style={{}}>
        <div key={eachBook.id} className="book">
        <div className="imageHeight"> 
          <img src={img} alt ="" className="img" /> 
        </div>
        <div className='writeup'> 
        <h4 className="title" > {title}</h4>
        <p className="author"> {author}</p>
        <p className="price"> {price} <span className="oldPrice"> {oldPrice}</span> <span className="Shipping">  {Shipping} </span></p>
        <p className="releaseDay">  {releaseDay}</p>
        <p className='like' > {like} <span> <button className='likebtn' onClick={(()=> setLike(like + 1))}> likes </button></span></p>
        </div>
        </div>
        // </React.Fragment>
    )
 }

 const BookComponent = () => {
  return (
    <section className="container">
   {eachBook.map((item) =>{
return <Book key={item.id} {...item} style={{display:"flex"}}/>
// {eachBook.map((item, index) =>{
// return <Book key={index} eachBook= {item} />
   })}
    </section>
  )
}


ReactDOM.render(<BookComponent/>, document.getElementById('root'))