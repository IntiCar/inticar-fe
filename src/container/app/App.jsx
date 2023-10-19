import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppRoutes, BeforeLoginRoutes } from "@/config/routes";
import { loadAuthUserCreator } from "@/stores/auth/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadAuthUserCreator());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {auth ? (
        <Routes>
          <Route path="/">
            {AppRoutes.map((route, index) => (
              <Route key={index} element={route.component} {...route} />
            ))}
          </Route>
        </Routes>
      ) : (
        <Routes>
          {BeforeLoginRoutes.map((route, index) => (
            <Route key={index} element={route.component} {...route} />
          ))}
        </Routes>
      )}
    </BrowserRouter>
  );
}
