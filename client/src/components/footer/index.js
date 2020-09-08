import React from "react";
import { Footer as BulmaFooter, Content } from 'react-bulma-components';
import "./style.sass";

function Footer() {
  return (
    <BulmaFooter>
      <Content className="footer has-text-centered">
        <p>Developers: Aidan, Ayse, Ha, Eda.</p>
      </Content>
    </BulmaFooter>
  );
}

export default Footer;
