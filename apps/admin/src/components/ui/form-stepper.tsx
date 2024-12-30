"use client";

import type { JSX } from "react";
import { Box, Group } from "@chakra-ui/react";
import { Button } from "@sportycoon/ui";
import {
  StepsRoot,
  StepsItem,
  StepsContent,
  StepsList,
  StepsPrevTrigger,
  StepsNextTrigger,
} from "@admin/components/ui/steps";

export interface FormStep {
  id: string;
  renderComponent: JSX.Element;
  title: string;
  description: string;
}

interface FormStepperProps {
  steps: FormStep[];
}

export function FormStepper({ steps }: FormStepperProps): JSX.Element {
  return (
    <Box>
      <StepsRoot count={steps.length} size="md">
        <StepsList>
          {steps.map((step, index) => (
            <StepsItem
              description={step.description}
              index={index}
              key={step.id}
              title={step.title}
            />
          ))}
        </StepsList>
        {steps.map((step, index) => (
          <StepsContent index={index} key={step.id}>
            {step.renderComponent}
          </StepsContent>
        ))}
      </StepsRoot>

      <Group>
        <StepsPrevTrigger asChild>
          <Button variant="primary">Prev</Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button variant="primary">Next</Button>
        </StepsNextTrigger>
      </Group>
    </Box>
  );
}
