import React, { Component } from "react";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <p>
          WP Standard is your source for leather bags, belts, and accessories of
          timeless style and incredible quality. There are likely a few things
          you rely on day-to-day. WP Standard is here for those things - leather
          bags, belts, and accessories of timeless quality and functionality.
          When we started WP Standard, the inspiration was to modernize classic
          leather messenger bags, tote bags, duffle bags, backpacks, belts, and
          wallets. In the world of fast-fashion where many brands have moved
          away from high-quality products instead to focus on the disposable,
          we've focused on providing staples of exceptional quality built by our
          craftsmen to last a very long time. If you try one of our products,
          we'll stand behind it. We offer free shipping on most items and easy
          returns.
        </p>
        <Footer />
      </div>
    );
  }
}
