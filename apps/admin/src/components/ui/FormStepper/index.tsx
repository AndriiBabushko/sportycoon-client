"use client";

import {
  Step as ChakraStep,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/stepper";
import { useCallback } from "react";
import type { JSX, ReactNode } from "react";
import { Button } from "@sportycoon/ui";
import { Box } from "@chakra-ui/layout";

interface Step {
  id: string;
  renderComponent: ReactNode;
  title: string;
  description: string;
}

interface FormStepperProps {
  steps: Step[];
}

export function FormStepper({ steps }: FormStepperProps): JSX.Element {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const handleNext = useCallback(() => {
    setActiveStep((prev) => prev + 1);
  }, [setActiveStep]);

  const handlePrevious = useCallback(() => {
    setActiveStep((prev) => prev - 1);
  }, [setActiveStep]);

  return (
    <Box>
      <Stepper index={activeStep}>
        {steps.map((step) => (
          <ChakraStep key={step.id}>
            <StepIndicator>
              <StepStatus
                active={<StepNumber />}
                complete={<StepIcon />}
                incomplete={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </ChakraStep>
        ))}
      </Stepper>

      <Box mt={8}>{steps[activeStep].renderComponent}</Box>

      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button disabled={activeStep === 0} onClick={handlePrevious}>
          Previous
        </Button>
        <Button disabled={activeStep === steps.length - 1} onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
