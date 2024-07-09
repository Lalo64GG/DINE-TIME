export type InputConfig = {
  label: string;
  placeholder: string;
  type?: string;
  props?: Record<string, any>;
};

export type FooterButtonConfig = {
  label: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "flat" | "ghost";
  onClick: () => void;
};
