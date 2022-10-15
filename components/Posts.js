import React from "react";
import Article from "./Article";

const articles = [
  {
    title: "Planning for your pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/planning-for-pregnancy.jpg",
  },
  {
    title: "Folate and pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/folate-and-pregnancy.jpg"
  },
  {
    title: "Planning for your pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/planning-for-pregnancy.jpg",
  },
  {
    title: "Folate and pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/folate-and-pregnancy.jpg"
  },
  {
    title: "Planning for your pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/planning-for-pregnancy.jpg",
  },
  {
    title: "Folate and pregnancy",
    content: "If you are thinking about pregnancy, visit your doctor for a preconception consult to provide you with expert advice on planning your pregnancy.",
    photo: "/assets/folate-and-pregnancy.jpg"
  },
];

export default function Posts() {
  return (
    <div className="text-center w-full mt-8 mb-8">
      <h1 className="heading-txt mb-5">სტატიები</h1>

      <div className="posts__grid">
        {articles.map((item, idx) => (
          <Article key={idx} title={item.title} content={item.content} photo={item.photo}/>
        ))}
      </div>
    </div>
  );
}
