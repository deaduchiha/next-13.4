const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  console.log(data);
  //   this log happen on terminal because its server side

  return (
    <div>
      {data.map((data) => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
};

export default Products;
