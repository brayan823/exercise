import { NextPage } from "next";
import React from "react";
import fetchApi from "src/api/api";
import { Layout } from "src/components/Layout";
import { TeaPage } from "../components/TeaPage";

interface Props {
  data: Card[];
}
export async function getStaticProps() {
  const data = await fetchApi("get", process.env.TEA_URL);
  return {
    props: {
      data,
    },
  };
}

const Index: NextPage<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <TeaPage data={data} />
    </Layout>
  );
};

export default Index;
