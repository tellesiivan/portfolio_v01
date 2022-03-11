import NbaTicker from "./nbaTicker";

export default function ApiSample() {
  return (
    <div className="relative z-10 mb-8 overflow-hidden h-96">
      <div className="absolute w-8/12 rounded-lg -left-10 -z-50 h-96 bg-[url('https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover"></div>
      <div className="m-3 text-right ">
        <p className="text-lg font-semibold text-text-grey">a productive</p>
        <h1 className="-mt-1 font-bold text-7xl text-text-white">
          workspace matters<span className="text-main-brightGreen">.</span>
        </h1>
      </div>
    </div>
  );
}
