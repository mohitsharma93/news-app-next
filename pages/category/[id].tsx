import React, { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { Post } from "../../shared/types"
import { Section } from "../../components/Section"
import { Loader } from "../../components/Loader"
import { categoryPaths } from "../../shared/staticPaths";
import { fetchPosts } from "../../api/category"

interface CategoryProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const posts = await fetchPosts(params.id);
  return { 
    props: {
      posts
    }
  }
}

export async function getStaticPaths() {
  return { paths: categoryPaths, fallback: true }
}

const Category: FunctionComponent<CategoryProps> = ({ posts }) => {
  const router = useRouter();
  console.log(posts)

  if (router.isFallback) return <Loader />
  return <Section posts={posts} title={String(router.query.id)} />
}

export default Category