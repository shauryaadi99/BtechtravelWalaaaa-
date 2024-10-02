import React from "react";
import style from "./meetTheTeam.module.css";

const data = [
  {
    img: "https://www.w3schools.com/w3images/team2.jpg",
    name: "John Doe",
    title: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium accusantium excepturi aperiam delectus dignissimos pariatur fugit similique? Aspernatur officiis error alias est ad! Molestias ad, in aperiam",
  },
  {
    img: "https://www.w3schools.com/w3images/team1.jpg",
    name: "Jane Doe",
    title: "Head of Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id officia qui est obcaecati. Quidem molestiae fugit aliquam voluptas molestias, dolorum illo enim cumque incidunt! Error incidunt omnis corporis dolores numquam!",
  },
  {
    img: "https://www.w3schools.com/w3images/team3.jpg",
    name: "Mike Ross",
    title: "Head of Operations",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vero, dolorum quibusdam in mollitia cum sequi quod dolores ullam labore cumque velit eius veritatis quas, cupiditate a similique blanditiis corrupti.",
  },
];

const MeetTheTeam = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>MEET OUR TEAM</h2>
        <div className={style.cardContainer}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.img} alt="John" />
              <div className={style.textContainer}>
                <h3>{item.name}</h3>
                <h6 className={style.cardTitle}>{item.title}</h6>
                <p>{item.description}</p>
                <p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "8px" }}
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
