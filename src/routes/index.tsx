import LoadingScreen from "@/components/Loading";
import ROUTERS_PATHS from "@/constants/router-paths";
import MainLayout from "@/layouts";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

export interface IRoutesState {
  path?: string;
  layout?: any;
  component?: any;
  routes?: IRoutesState[];
}

export const renderRoutes = (routes: IRoutesState[]) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Layout = route?.layout || React.Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: IRoutesState[] = [
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.HOME,
    component: lazy(() => import("@/pages/Home")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.CAMPAIGN,
    component: lazy(() => import("@/pages/Campaign")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.ADMIN_BUSINESS,
    component: lazy(() => import("@/pages/AdminBusiness")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.ADMIN_CAMPAIGNS,
    component: lazy(() => import("@/pages/AdminCampaigns")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.CHART,
    component: lazy(() => import("@/pages/Chart")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.ADMIN_AD_SET,
    component: lazy(() => import("@/pages/AdminAdSets")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.ADMIN_AD,
    component: lazy(() => import("@/pages/AdminAds")),
  },
  {
    layout: MainLayout,
    path: ROUTERS_PATHS.ADMIN_FORM_FACE,
    component: lazy(() => import("@/pages/AdminFormFace")),
  },
];

export default routes;
