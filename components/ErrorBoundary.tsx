"use client";

import React, { ReactNode } from "react";

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default ErrorBoundary;
