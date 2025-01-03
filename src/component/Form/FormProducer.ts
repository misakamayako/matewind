import { createContext } from "react";

export const WidthProducer = createContext<number | `${number}`>("120");
export const InlineProducer = createContext<boolean>(false);
export const LabelPositionContext = createContext<"left"|"top">("left");
