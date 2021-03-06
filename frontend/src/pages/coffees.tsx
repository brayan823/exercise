import { NextPage } from "next";
import React from "react";
import fetchApi from "src/api/api";
import { Layout } from "src/components/Layout";
import { CoffeePage } from "../components/CoffeePage";

interface Props {
  data: Card[];
}
export async function getStaticProps() {
  const data = await fetchApi("get", process.env.COFFEE_URL);
  return {
    props: {
      data,
    },
  };
}

const Index: NextPage<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <CoffeePage data={data} />
    </Layout>
  );
};

export default Index;
