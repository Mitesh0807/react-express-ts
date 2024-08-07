import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Button } from "@/components/ui/button";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SomePage />} />
      <Route path="/some" element={<SomePage />} />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

function SomePage() {
  return (
    <>
      <Button>SomePage</Button>
    </>
  );
}
