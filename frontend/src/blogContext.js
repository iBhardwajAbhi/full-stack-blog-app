import { createContext, useState } from 'react';

export const BlogContext = createContext({});

export function BlogContextProvider({ children }) {
  const [blogInfo, setBlogInfo] = useState({ _id: 'error' });
  return (
    <BlogContext.Provider value={{ blogInfo, setBlogInfo }}>
      {children}
    </BlogContext.Provider>
  );
}
