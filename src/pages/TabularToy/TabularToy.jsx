const TabularToy = ({ toy }) => {
  console.log(toy);
  const { name, sellerName } = toy;
  return (
    <div className="my-4 bg-red-400">
      <p>Name:{name}</p>
      <p>Seller Name:{sellerName}</p>
    </div>
  );
};

export default TabularToy;
