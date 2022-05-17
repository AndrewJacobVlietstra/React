import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import CounterContext from "./context/counterContext";
import { Route, } from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import SalesPage from "./pages/SalesPage";

import { useSelector } from "react-redux";

function App() {
  const userState = useSelector((state) => state.user);
  console.log(userState);

  return (
    <>
      <Header />
      {userState.isLoggedIn ? null : <Auth />}

      {userState.isLoggedIn ? (
        <>
          <Route path="/" exact>
            <UserProfile />
            <CounterContext>
              <Counter />
            </CounterContext>
          </Route>

          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          
          <Route path="/products/:productId" exact>
            <ProductDetails />
          </Route>

          <Route path="/sales" exact>
            <SalesPage />
          </Route>
        </>
      ) : null}
    </>
  );
}

export default App;
