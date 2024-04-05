import React, { useEffect, useState } from "react";
import { Button, Center, Spinner } from "native-base";
import { WebView } from 'react-native-webview';

function WebViewScreen({ navigation, route }) {
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (route.params?.url) {
            setUrl(route.params.url)
        }

    }, [route.params?.url])

    if (url === null) return null;

    return (
        <>
            {
                isLoading && !url ?
                    <Spinner />
                    :
                    <WebView
                        source={{ uri: url }}
                        onLoadStart={() => {
                            setIsLoading(true);
                        }}
                        onLoadEnd={()=>{
                            setIsLoading(false);
                        }}
                        style={{ width: "100%" }}
                    />
            }

        </>
    );
}

export default WebViewScreen;