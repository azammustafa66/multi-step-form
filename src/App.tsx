import Form from "./components/Form";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-start md:py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between bg-white shadow-lg rounded-lg overflow-hidden md:w-[55%] md:p-3">
        <Sidebar />
        <div className="w-full p-1 md:p-3">
          <Form />
        </div>
      </div>
    </main>
  );
};

export default App;
