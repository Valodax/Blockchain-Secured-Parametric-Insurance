import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, configureChains, Chain, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { polygonMumbai } from "wagmi/chains";
import Background from "@/components/ParticlesBackground";
import React, { useState, useCallback } from "react";
import { ethers } from "ethers";
import "react-day-picker/dist/style.css";

const { provider, webSocketProvider } = configureChains([polygonMumbai], [publicProvider()]);

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
});

function MyApp({ Component, pageProps, router }: AppProps) {
    const [backgroundColor, setBackgroundColor] = useState("#ff0000");

    return (
        <WagmiConfig client={client}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                <Background backgroundColor={backgroundColor} />
                <Component {...pageProps} setBackgroundColor={setBackgroundColor} />
            </SessionProvider>
        </WagmiConfig>
    );
}

export default function App({ Component, pageProps, router }: AppProps) {
    return <MyApp Component={Component} pageProps={pageProps} router={router} />;
}
