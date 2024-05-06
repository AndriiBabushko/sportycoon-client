"use client";

import React, { FC, forwardRef, Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "@/styles/accordion.css";
import { Icons } from "./Icons";

const AccordionTrigger = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Icons.ArrowBigDown className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
}

interface MyAccordionProps {
  items: AccordionItem[];
}

export const MyAccordion: FC<MyAccordionProps> = ({ items }) => (
  <Accordion.Root className="AccordionRoot" type={"multiple"}>
    {items.map((item) => (
      <Accordion.Item key={item.id} value={item.id} className="AccordionItem">
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.description}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);
