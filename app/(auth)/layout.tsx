import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <main className="h-screen overflow-hidden">{children}</main>;
};

export default AuthLayout;
