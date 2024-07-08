"use client";

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { ReactNode, useCallback } from "react";
import { Button } from "@/components/common";

interface Step {
  renderComponent: ReactNode;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export function FormStepper({ steps }: Props) {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const handleNext = useCallback(() => setActiveStep((prev) => prev + 1), []);
  const handlePrevious = useCallback(
    () => setActiveStep((prev) => prev - 1),
    [setActiveStep]
  );

  return (
    <Box>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Box mt={8}>{steps[activeStep].renderComponent}</Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button isDisabled={activeStep === 0} onClick={handlePrevious}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
