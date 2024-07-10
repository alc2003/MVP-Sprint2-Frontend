import "@/styles/globals.css";
import type {AppProps} from "next/app";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
      </>
  );
}
