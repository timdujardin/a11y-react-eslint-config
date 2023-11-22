import React, { FC, HTMLProps } from "react";

const Foo: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  return <div {...props}>Foo</div>;
};

export default Foo;
