import type { GetServerSideProps } from "next";
import { apolloClient } from "../config/graph_setup";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { CHARECTER } from "../graphql/query/charecers";
import { useState } from "react";

type Props = {
  characters: Array<any>;
};

const Home = ({ characters }: Props) => {
  // console.log(characters, "characters");
  const [datas, setdatas] = useState([]);
  const { loading, error, data } = useQuery(CHARECTER);
  if (!loading && !error) {
    console.log(data, "data");
  }
  if (loading) return <p>Loading...</p>;

  return <div className={styles.container}></div>;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await apolloClient.query({
//     query: CHARECTER,
//   });
//   console.log(data.characters, "sas");
//   return {
//     props: {
//       characters: data.characters.results,
//     },
//   };
// };
export default Home;
