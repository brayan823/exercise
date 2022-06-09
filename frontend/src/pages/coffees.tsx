import { NextPage } from "next";
import React from "react";
import fetchApi from "src/api/coffeeApi";
import { Layout } from "src/components/Layout";
import { CoffeePage } from "../components/CoffeePage";

interface Props {
  data: Coffee[];
}
export async function getStaticProps() {
  const data = await fetchApi("get", "http://localhost:3000/coffee");
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
