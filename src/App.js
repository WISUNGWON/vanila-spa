import ProductListPage from "./pages/ProductListPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import CartPage from "./pages/CartPage.js";
import { init } from "./core/router.js";

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      console.log({ productId });
      new ProductDetailPage({
        $target,
        productId,
      }).render();
    } else if (pathname === "/cart") {
      new CartPage({
        $target,
      }).render();
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}

export default App;
