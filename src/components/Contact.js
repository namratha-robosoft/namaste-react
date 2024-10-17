const Contact = () => {
  return (
    <div className="p-4 mt-24 max-w-[800px] min-h-[500px] mx-auto  bg-slate-50">
      <h3 className="text-2xl text-slate-600 font-bold text-center">
        Contact Us
      </h3>
      <div className="m-4">
        <div className="p-5">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Full Name
          </label>
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Full Name"
            id="name"
          />
        </div>
        <div className="p-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="p-5">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Phone Number"
            id="phone"
          />
        </div>
        <div className="p-5">
          <label
            htmlFor="location"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Location
          </label>
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Location"
            id="location"
          />
        </div>
        <div className="p-5">
          <label
            htmlFor="feedback"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Write to us
          </label>
          <textarea
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            rows={2}
            type="text"
            placeholder="Write to us"
            id="feedback"
          />
        </div>
        <div className="p-5">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
