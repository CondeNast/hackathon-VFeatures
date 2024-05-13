import CreateContentType from "./CreateContentType";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#edebeb", margin: '350px', marginTop: '50px' }}>
        <CreateContentType />
      </div>
    </div>
  );
};

export default Homepage;
