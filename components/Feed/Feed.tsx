import React from 'react';
import { Section } from '../Section';
import { Category, Post } from '../../shared/types';

interface FeedProps {
  posts: Post[]
  categories: Category[]
}

export const Feed: React.FC<FeedProps> = ({posts, categories}: FeedProps) => {
  return (
    <>
      {
        categories.map((currentCategory: Category) => {
          const inSection = posts.filter(post => post.category === currentCategory)
          
          return (
            <Section
              title={currentCategory}
              key={currentCategory}
              posts={inSection}
              isCompact
            />
          )
        })

      }
    </>
  )
}