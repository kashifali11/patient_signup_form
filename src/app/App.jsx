import { Layout } from "antd";
import React, { useEffect } from "react";
import AppErrorBoundary from "./components/common/errorBoundry/ErrorBoundary.jsx";
import Home from "./container/SignUpForm.jsx";

export default function App() {
  return (
    <React.StrictMode>
      <AppErrorBoundary>
        <Layout>
          <Home />
        </Layout>
      </AppErrorBoundary>
    </React.StrictMode>
  );
}
