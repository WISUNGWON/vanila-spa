function ProductDetailPage({ $target, productId }) {
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h1>상품 정보</h1>";

  this.state = {
    productId,
    product: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($page);
  };
}

export default ProductDetailPage;
