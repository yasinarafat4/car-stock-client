import { useForm } from "react-hook-form";

const UpdateToyModal = ({ closeModal, toy, handleToyUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white h-5/6 md:w-3/4 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Update Toy</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={closeModal}
            >
              <span className="text-3xl">&times;</span>
            </button>
          </div>
          <form
            onSubmit={handleSubmit(handleToyUpdate)}
            className="w-full mb-4 shadow-lg p-10"
          >
            <div className="mb-4 w-full hidden">
              <label htmlFor="id" className="block mb-2">
                Id
              </label>
              <input
                type="text"
                id="id"
                {...register("_id", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                defaultValue={toy?._id}
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="pictureUrl" className="block mb-2">
                Picture URL:
              </label>
              <input
                type="url"
                id="pictureUrl"
                {...register("pictureUrl", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                defaultValue={toy?.pictureUrl}
              />
              {errors.pictureUrl && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="md:flex gap-3">
              <div className="mb-4 md:w-1/2">
                <label htmlFor="name" className="block mb-2">
                  Toy Name:
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  defaultValue={toy?.name}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-4 md:w-1/2">
                <label htmlFor="subCategory" className="block mb-2">
                  Sub-category:
                </label>
                <select
                  id="subCategory"
                  {...register("subCategory", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  defaultValue={toy?.subCategory}
                >
                  <option value="">Select a sub-category</option>
                  <option value="Sports Car">Sports Car</option>
                  <option value="Regular Car">Regular Car</option>
                  <option value="Truck">Truck</option>
                </select>
                {errors.subCategory && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="md:flex gap-3">
              <div className="mb-4 md:w-1/2">
                <label htmlFor="price" className="block mb-2">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  defaultValue={toy?.price}
                />
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-4 md:w-1/2">
                <label htmlFor="quantity" className="block mb-2">
                  Available Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  defaultValue={toy?.quantity}
                />
                {errors.quantity && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2">
                Detail Description:
              </label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={3}
                defaultValue={toy?.description}
              ></textarea>
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyModal;
