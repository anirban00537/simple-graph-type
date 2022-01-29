import type { GetServerSideProps } from "next";
import { apolloClient } from "../config/graph_setup";
import styles from "../styles/Home.module.css";
import { CHARECTER } from "../graphql/query/charecers";

type Props = {
  characters: Array<any>;
};

const Home = ({ characters }: Props) => {
  console.log(characters, "characters");
  return <div className={styles.container}></div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: CHARECTER,
  });
  console.log(data.characters, "sas");
  return {
    props: {
      characters: data.characters.results,
    },
  };
};
export default Home;
