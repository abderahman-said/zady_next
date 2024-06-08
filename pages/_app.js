import Layout from '../Components/Layout'
import '../styles/globals.css'
import store from "../Components/redux/store/Store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        < Layout >

          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;