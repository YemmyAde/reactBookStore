import React from "react";
import book1 from "./img/book1.jpg";
import book2 from "./img/book2.jpg";

const BookArray = [ {
  id:1,
  ImgSection: book1,
  Title: "Why a Daughter Needs a Dad",
  Author: "Gregory Lang",
  OtherInfo: "5 offers from $15.94",
},
{
  id:2,
  ImgSection: book2,
  Title: "Fast. Feast. Repeat.: The Comprehensive Guide to...",
  Author: "Gin Stephens",
  OtherInfo: "Paperback",
},]

const Book = (props) => {
    const {ImgSection, Title, Author, OtherInfo, children} = props;
    console.log(props)
  return (
    <>
      <img src={ImgSection} alt="" />
      <h4> {Title}</h4>
      <p> {Author} </p>
      <p> {OtherInfo} </p>
      {children}
      
    </>
  );
};

// const ImgSection = () => <img src= {book1} alt=""/>
// const Title = () =>  {
//         return (  <p>  <a href='https://www.amazon.com/Why-Daughter-Needs-Gregory-Lang/dp/1492667838/ref=zg_bs_books_1?_encoding=UTF8&psc=1&refRID=QWTA7R48SM8CS6TCHM94'> Why a Daughter Needs a Dad </a> </p>
//         )
//         };
// const Author =  () => <p> Gregory Lang</p>

// const OtherInfo =  () =>  <p> Hardcover <br></br> 5 offers from $15.94</p>

export { Book, BookArray };
