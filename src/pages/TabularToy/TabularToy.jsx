const TabularToy = ({ toy }) => {
  console.log(toy);
  const { name, sellerName } = toy;
  return (
    <div className="my-4 bg-red-400 px-4 py-6 rounded-lg">
      <p>Name:{name}</p>
      <p>Seller Name:{sellerName}</p>
    </div>
  );
};

export default TabularToy;
