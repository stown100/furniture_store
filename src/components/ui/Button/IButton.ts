import { ReactElement } from "react";

export interface Props {
  children: string | ReactElement;
  width?: string;
  height?: string;
  color?: "black";
  disabled?: boolean;
  onClick?: (param: any) => void;
}
