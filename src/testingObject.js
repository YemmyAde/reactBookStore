import React from "react";
import book1 from "./img/book1.jpg";
import book2 from "./img/book2.jpg";

const FirstBook = {
  ImgSection: book1,
  Title: "Why a Daughter Needs a Dad",
  Author: "Gregory Lang",
  OtherInfo: "5 offers from $15.94",
};
const SecondBook = {
  ImgSection: book2,
  Title: "Fast. Feast. Repeat.: The Comprehensive Guide to...",
  Author: "Gin Stephens",
  OtherInfo: "Paperback",
};
const Book = ({ImgSection, Title, Author, OtherInfo, children}) => {
    // const {ImgSection, Title, Author, OtherInfo, children} = props
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

export { FirstBook, SecondBook, Book };
