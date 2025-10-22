import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient />
    </>
  );
}
