import React from "react";
import { Footer as BulmaFooter, Content } from 'react-bulma-components';


function Footer() {
  return (
    <BulmaFooter>
      <Content className="has-text-centered">
        <p>Developers: Aidan, Ayse, Ha, Eda. The
          source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.           .
        </p>
      </Content>
    </BulmaFooter>
  );
}

export default Footer;
