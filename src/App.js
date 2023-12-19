import Footer from "./comp/Footer";
import Team from "./comp/Team";

function App() {
  return (
    <>    
      <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Team />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
