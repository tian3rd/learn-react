class ProductList extends React.Component {
  render() {
    const products = Seed.products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map((product) => (
      <Product
        // key is unique for map not for Product but for React
        key={"product-" + product.id}
        id={product.id}
        title={product.name}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    ));
    // return a new mapped array of product components
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href="this.props.url">{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
