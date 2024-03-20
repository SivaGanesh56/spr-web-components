import { Fragment } from "react";

import Header from "@sprinklrjs/website-components/src/components/header";
import Footer from "@sprinklrjs/website-components/src/components/footer";

import headerProps from "@sprinklrjs/website-components/headerProps.json";
import footerProps from "@sprinklrjs/website-components/footerProps.json";
import { ExternalComponentContextProvider } from "@sprinklrjs/website-components/src/components/externalComponent";

import styles from "@sprinklrjs/website-components/styles.css";

const backgroundStyles = {
  background:
    "linear-gradient(270deg, rgba(28, 108, 253, 0.2) 3%, rgba(92, 200, 195, 0.2) 100%)",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="font-sans">
      <ExternalComponentContextProvider
        value={{
          CTAComponent: (props) => {
            if (props.action === "NAVIGATE") {
              return <a href={props.url}>{props.children}</a>;
            }

            return <Fragment>{props.children}</Fragment>;
          },
        }}
      >
        <Header
          {...headerProps}
          scrollOffsetYForHeaderCollapse={400}
          backgroundStyles={backgroundStyles}
          searchEl={
            <div
              style={{
                border: "solid 1px #333",
                width: "100%",
                height: "45px",
                padding: "8px 16px",
                zIndex: 5,
              }}
            >
              Search
            </div>
          }
        />
        <main
          style={{
            height: "200vh",
          }}
        />
        <Footer className="hidden tablet:block" {...footerProps} />
      </ExternalComponentContextProvider>
    </div>
  );
}

export default App;
