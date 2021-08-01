import React from 'react';
import {Grid, MoreLink, Title } from './style'
import { Post as PostType } from "../../shared/types"
import { PostCard } from '../Post';
import Link from 'next/link';

interface SectionProps {
  title: string,
  posts: PostType[]
  isCompact?: boolean
}

export const Section: React.FC<SectionProps> = ({ title, posts, isCompact = false }) => {
  console.log(posts);
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post: PostType) => {
          return <PostCard key={post.id} post={post} />
        })}
      </Grid>
      {isCompact && (
        <Link href={`/category/${title}`} passHref>
          <MoreLink>More in {title}</MoreLink>
        </Link>
      )}
    </section>
  )
}
