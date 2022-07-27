import React from 'react';
import {Helmet} from "react-helmet";

function AppServices(props) {
    return (
        <div>
            <Helmet
                script={[{
                    type: 'text/javascript',
                    innerHTML: ` 
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '321562219929857'); 
fbq('track', 'PageView');
                          `
                }]}
            />
            <Helmet>
                <noscript>
                    {`<img height="1" width="1" 
                        src="https://www.facebook.com/tr?id=321562219929857&ev=PageView
                        &noscript=1"/>`
                    }
                </noscript>
            </Helmet>
        </div>
    );
}

export default AppServices;