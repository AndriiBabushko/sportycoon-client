import type { PropsWithChildren, JSX } from "react";

type FormErrorMessageProps = PropsWithChildren;

export default function FormErrorBox({
  children,
}: FormErrorMessageProps): JSX.Element {
  return <div className="flex-row items-center p-[8px]">{children}</div>;
}
