declare module "react-google-recaptcha" {
  import * as React from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onErrored?: () => void;
    onExpired?: void | (() => void);
    onLoaded?: () => void;
    name?: string;
    theme?: "light" | "dark";
    type?: "image" | "audio";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
    badge?: "bottomright" | "bottomleft" | "inline";
    hl?: string;
    action?: string;
    explicit?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    getValue(): string | null;
  }
}
