import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Header from "../src/components/Header/Header";
import Navigation from "../src/components/Nav/Navigation";
import Result from "../src/components/Result/Result";
import requestAction from "../utils/requests";

interface ApiResponse<DataType> {
  status_message?: string;
  status_code?: number;
  results: DataType;
}

export interface MovieResult {
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  title: string;
  original_title: string;
  vote_count: number;
  release_date: string;
}

const Home: NextPage = ({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Header />
      <Navigation />
      <Result movieResults={results} />
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string;
  const requestQuery =
    requestAction[genre]?.url ?? requestAction.fetchTrending.url;

  const request = await fetch(`https://api.themoviedb.org/3${requestQuery}`);
  const jsonResponse: ApiResponse<MovieResult[]> = await request.json();
  const results = jsonResponse.results;

  return {
    props: {
      results,
    },
  };
};
