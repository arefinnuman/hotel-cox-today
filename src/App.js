import { RouterProvider } from "react-router-dom";

import { routes } from "./Routes/Public/Routes";

function App() {
  return (
    <div className="xl:container xl:mx-auto">
      <RouterProvider router={routes}> </RouterProvider>
    </div>
  );
}

export default App;
