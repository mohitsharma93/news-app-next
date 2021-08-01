import Link from "next/link";
import React from "react";
import { Post } from "../../shared/types";
import { Container } from "./style";

interface Breadcrumb {
  post: Post
}

export const Breadcrumbs: React.FC<Breadcrumb> = ({ post }) => {
  return (
    <Container>
      <Link href='/'>
        <a>Front</a>
      </Link>
      <span>▸</span>
      <Link
        href="/category/[id]"
        as={`/category/${post.category}`}
      >
        <a>{post.category}</a>
      </Link>
    </Container>
  )
}