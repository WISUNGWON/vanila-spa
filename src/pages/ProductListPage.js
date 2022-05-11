import ProductList from "../component/ProductList.js";
import { request } from "../core/api.js";

function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($page);
    new ProductList({
      $target: $page,
      initialState: this.state,
    });
  };

  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };

  fetchProducts();
}

export default ProductListPage;
