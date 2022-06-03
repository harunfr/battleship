import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
}

function PageText({ children, className }: TextProps): React.ReactElement {
  return <span className={className}>{children}</span>;
}

export default PageText;
