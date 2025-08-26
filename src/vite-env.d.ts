/// <reference types="vite/client" />

declare module '*.mdx' {
  import React from 'react';
  const component: React.ComponentType;
  export default component;
}
