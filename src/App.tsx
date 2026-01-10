import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { UiHighCognitive } from "./screens/UiHighCognitive";
import { UiLowCognitive } from "./screens/UiLowCognitive";
import { UiMedium } from "./screens/UiMedium";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Desktop />,
  },
  {
    path: "/ai/low-cognitive",
    element: <UiLowCognitive />,
  },
  {
    path: "/ai/high-cognitive",
    element: <UiHighCognitive />,
  },
  {
    path: "/ai/medium-cognitive",
    element: <UiMedium />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
