import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Unwind and elevate your stay with complimentary cocktails at our hotel's lounge, the perfect way to start your evening.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Explore breathtaking trails right at your doorstep, offering endless opportunities for adventure and discovery.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Traveling made easy! Our free shuttle service ensures convenient access to nearby attractions, making your stay even more enjoyable.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Store your favorite beverages in our specialized beer storage, keeping them at the perfect temperature for your enjoyment throughout your stay.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
