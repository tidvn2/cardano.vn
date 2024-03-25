import React from "react";
import Layout from "@theme/Layout";
import Home from "@site/src/pages/Home";
import Aos from "@site/src/components/theme/Aos";

type Props = {};

const App = function ({}: Props) {
    return (
        <Layout>
            <Home />
            <Aos />
        </Layout>
    );
};

export default App;
