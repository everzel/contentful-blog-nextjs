import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from './Content.module.css';

interface ContentProps {
  content: string;
}

export default function Content({ content }: ContentProps) {
  return (
    <section
      className={`w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto my-12 md:my-20 ${styles.content}`}
    >
      <Markdown>{content}</Markdown>
    </section>
  );
}
