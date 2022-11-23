import { FaBook, FaBookDead, FaBriefcase } from 'react-icons/fa';
import React from 'react';

export type Link = {
  label: string
  icon: JSX.Element
  url: string
}

export type Sublink = {
  page: string
  links: Link[]
}

const sublinks: Sublink[] = [
  {
    page: 'articles',
    links: [
      { label: 'microservices', icon: <FaBookDead />, url: '/products' },
      { label: 'design patterns', icon: <FaBookDead />, url: '/products' },
      { label: 'practices', icon: <FaBookDead />, url: '/products' },
    ],
  },
  {
    page: 'infrastructure',
    links: [
      { label: 'logging', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'console', icon: <FaBook />, url: '/products' },
      { label: 'cvs', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'about',
    links: [
      { label: 'me', icon: <FaBriefcase />, url: '/products' },
      { label: 'the blog', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;