import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useSetTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  useSetTitle("Add Toy");

  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch("https://car-stock-server.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire(
          "Good job!",
          "Your favorite toy is added successfully",
          "success"
        );
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Oops...",
          "An error occurred while adding the toy. Please try again.",
          "error"
        );
      });
    console.log(data);
  };

  return (
    <div className="dark:bg-slate-900 dark:text-slate-300">
      <h2 className="ms-4 text-start text-4xl font-bold mt-10 text-[#2E5879] dark:text-slate-300">
        Add Your Favorite Toy
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mb-4 shadow-lg p-10"
      >
        <div className="md:flex gap-3">
          <div className="mb-4 md:w-1/2">
            <label htmlFor="pictureUrl" className="block mb-2">
              Picture URL:
            </label>
            <input
              type="url"
              id="pictureUrl"
              {...register("pictureUrl", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              placeholder="Photo URL"
            />
            {errors.pictureUrl && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4 md:w-1/2">
            <label htmlFor="name" className="block mb-2">
              Toy Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              placeholder="Enter Toy Name"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="mb-4 md:w-1/2">
            <label htmlFor="sellerName" className="block mb-2">
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              readOnly
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 dark:text-slate-800"
              {...register("sellerName", { required: true })}
            />
          </div>

          <div className="mb-4 md:w-1/2">
            <label htmlFor="sellerEmail" className="block mb-2">
              Seller Email:
            </label>
            <input
              type="text"
              id="sellerEmail"
              readOnly
              defaultValue={user?.email}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              {...register("sellerEmail", { required: true })}
            />
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="mb-4 md:w-1/2">
            <label htmlFor="subCategory" className="block mb-2">
              Sub-category:
            </label>
            <select
              id="subCategory"
              {...register("subCategory", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
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

          <div className="mb-4 md:w-1/2">
            <label htmlFor="price" className="block mb-2">
              Price:
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              placeholder="Enter Price"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="md:flex gap-3">
          <div className="mb-4 md:w-1/2">
            <label htmlFor="rating" className="block mb-2">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              {...register("rating", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              placeholder="Give Ratings"
            />
            {errors.rating && (
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
              className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
              placeholder="Put Available Quantity"
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
            className="w-full px-4 py-2 border border-gray-300 rounded dark:text-slate-800"
            rows={4}
            placeholder="Write Description"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline normal-case md:w-1/4"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
