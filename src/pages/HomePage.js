import FormInput from "../components/FormInput";
import ListRecipes from "../components/ListRecipes";

function HomePage() {
  return (
    <div className="px-3 pl-4 md:px-12 pb-12 md:pb-0">
      <FormInput />
      <ListRecipes />
    </div>
  );
}

export default HomePage;
