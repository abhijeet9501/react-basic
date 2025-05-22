function Toast({ alert }) {
  return (
    <div className="toast toast-top toast-end top-20">
      <div className="alert alert-info bg-purple-600 text-white border-0 shadow-lg shadow-purple-500/50">
        <span>{alert}</span>
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-md h-fit">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

function AddToDo() {
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center bg-gray-900 px-4">
      <div className="flex flex-col w-full mt-10">
        <label className="text-3xl font-bold text-purple-500">Recent</label>
        <div className="flex flex-wrap gap-4 mt-10 w-full max-w-8xl justify-center max-h-100 overflow-scroll">
          <Card title="Abc" content="wqe fsf" />
          <Card title="Abc" content="wqe fsf" />
          <Card title="Abc" content="wqe fsf" />
          <Card title="Abc" content="wqe fsf" />
        </div>
      </div>
      <div className="flex justify-center items-center w-full max-w-lg mt-6 px-4 bottom-10 position: absolute">
        <div className="flex flex-col space-y-3 justify-center items-center w-full bg-base-100 shadow-xl pt-6 p-4 rounded-3xl">
          <div className="space-y-2 w-full flex flex-col items-center justify-center h-20">
            <input
              type="text"
              placeholder="Enter Title"
              className="input input-bordered rounded-r-none flex-1 focus:outline-none w-100"
            />
            <input
              type="text"
              placeholder="Enter Task"
              className="input input-bordered rounded-r-none flex-1 focus:outline-none w-100"
            />
          </div>
          <button className="btn btn-primary rounded-l-none px-6 bg-purple-500 hover:bg-purple-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
