import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  category,
}) => {
  return (
    <div
      className="card"
      style={{ width: "460px", height: "500px", paddingBottom: "20px" }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "390px", height: "232px" }}
      />
      <h2 style={{ paddingBottom: "10px" }}>{title}</h2>
      <p style={{ paddingBottom: "10px" }}>{description}</p>
      <a href="">{category}</a>
    </div>
  );
};

interface PageSliceProps {
  cards: CardProps[];
}

const PageSlice: React.FC<PageSliceProps> = ({ cards }) => {
  return (
    <div
      className="bigBox"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        paddingBottom: "70px",
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default PageSlice;
