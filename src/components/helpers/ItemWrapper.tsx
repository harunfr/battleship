import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
}

function ItemWrapper({
  children,
  className,
}: WrapperProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export default ItemWrapper;
