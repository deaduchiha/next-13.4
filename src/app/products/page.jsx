const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  //   fetch('/url',{cache:'force-cache'}) ==> default catch => SSG
  //   fetch("/url", { next: { revalidate: 10 } }); ==> ISR
  //   fetch('/url',{cache:'no-store'}) ==> for change it to SSR

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
