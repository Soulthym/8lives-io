import React from 'react';
import { Helmet } from 'react-helmet';

function Header(props) {
    return (
        <div>
            <Helmet>
                <title>Big Cats</title>
                <meta
                    name="description"
                    content="The Big Cats NFT will produce a collection a 5000 pieces with each piece of their DNA shared and protected via the Ethereum Blockchain."
                />
                <meta property="og:title" content="Big Cats" />
                <meta property="og:description" content="The Big Cats NFT will produce a collection a 5000 pieces with each piece of their DNA shared and protected via the Ethereum Blockchain." />
                <meta property="og:image" content="https://www.bigcatsnft.com/assets/big-cats/images/share/share-banner.jpg" />
                <meta property="og:url" content="https://www.bigcatsnft.com/ogcollection"/>
                <meta property="og:site_name" content="Big Cats" />
                <meta property="og:image:width" content="2508" />
                <meta property="og:image:height" content="1442" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Big Cats" />
                <meta name="twitter:description" content="The Big Cats NFT will produce a collection a 5000 pieces with each piece of their DNA shared and protected via the Ethereum Blockchain." />
                <meta name="twitter:image" content="https://www.bigcatsnft.com/assets/big-cats/images/share/share-banner.jpg" />
            </Helmet>
        </div>
    );
}

export default Header;