import React from "react";
import styles from "./Cards.module.css";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          cardTitle="Kasus"
          cardSubtitle="Jumlah angka kasus COVID-19"
          value={confirmed.value}
          className={styles.confirmed}
        />
        <CardComponent
          cardTitle="Sembuh"
          cardSubtitle="Jumlah angka sembuh COVID-19"
          value={recovered.value}
          className={styles.recovered}
        />
        <CardComponent
          cardTitle="Meninggal"
          cardSubtitle="Jumlah angka meninggal COVID-19"
          value={deaths.value}
          className={styles.deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;
