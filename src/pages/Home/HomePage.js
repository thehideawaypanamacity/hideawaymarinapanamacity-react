import React from "react";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import "./HomePage.css";

const card = {
  image: {
    alt: "Marina Picture",
    src: require("../../assets/images/header.jpg"),
    style: {
        width: "95%"
    }
  },
  title: "Booking",
  text: `$299 for ½ day

    $399 for full day.
    
    “bumper to bumper service”.
    
    We pick you up and deliver you back to your car once you make it to Hideaway Marina.
    
    Come ½ hour early for check-in

    If born after 1988 a boat safety certificate will be required`,
};

export const HomePage = () => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <div>
      <Section title="Site is Under Construction. Please stay tuned.">
        <Card
          title={card.title}
          text={card.text}
          image={card.image}
          subtitle={card.subtitle}
        >
            <h4>For price and rent text 850-890-4808</h4>
        </Card>
      </Section>
    </div>
  );
};
