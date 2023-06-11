export const generateStaticParams = async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  const data = await products.json();

  const params = data.map((product) => ({ productId: String(product.id) }));

  return params;
};

const UserDetails = async ({ params }) => {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await product.json();

  return (
    <div>
      <h1>products details - {params.productId}</h1>
      <h2>{data.title}</h2>
    </div>
  );
};

export default UserDetails;
