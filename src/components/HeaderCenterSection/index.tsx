import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  children: any;
}

const HeaderCenterSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <h2>\\</h2>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
    </Container>
  );
};

export default HeaderCenterSection;
