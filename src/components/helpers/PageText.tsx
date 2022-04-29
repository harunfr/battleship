import React from 'react';

interface TextProps {
  children: React.ReactNode;
  fontSize?: string;
  className?: string;
}

function PageText({ children, className }: TextProps): React.ReactElement {
  return <span className={className}>{children}</span>;
}

export default PageText;
