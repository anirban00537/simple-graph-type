import type { NextPage, GetStaticProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../config/graph_setup";
import styles from "../styles/Home.module.css";
import { CHARECTER } from "../graphql/query/charecers";

const Home: NextPage = () => {
  return <div className={styles.container}></div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: CHARECTER,
  });
  console.log(data, "this is a data");
  return {
    props: {
      charecters: data,
    },
  };
};
export default Home;
