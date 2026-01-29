import React from 'react';

interface SEOArticleProps {
  title: string;
  children: React.ReactNode;
}

const SEOArticle: React.FC<SEOArticleProps> = ({ title, children }) => {
  return (
    <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      {children}
    </article>
  );
};

export default SEOArticle;
