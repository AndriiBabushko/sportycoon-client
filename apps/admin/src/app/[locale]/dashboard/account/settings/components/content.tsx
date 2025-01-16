// eslint-disable
"use client";

import {
  Box,
  Flex,
  Input,
  Select,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import type { JSX } from "react";
import React, { useEffect, useState, useTransition } from "react";
import { TRANSLATES_NAMESPACES, useRouter } from "@sportycoon/locales";
import { useTranslations } from "next-intl";
import {
  ACCOUNT_SCHEMA,
  getAccountSchema,
  zodResolver,
} from "@sportycoon/validation";
import type { TAccountSchema, GoalOption } from "@sportycoon/validation";
import { useForm } from "react-hook-form";
import type { ApolloError } from "@sportycoon/api";
import {
  DELETE_USER_PROFILE,
  FitnessLevel,
  Gender,
  Goal,
  HeightUnit,
  ME_ACCOUNT_PROFILE,
  ME_DASHBOARD_LAYOUT,
  UPDATE_USER_PROFILE,
  useApolloClient,
  useMutation,
  useQuery,
  WeightUnit,
} from "@sportycoon/api";
import {
  FormErrorBox,
  useLoader,
  TextInfo,
  Heading,
  Paragraph,
  Button,
  AdminPages,
  Icons,
} from "@sportycoon/ui";
import { ControlledSelect, SubBox } from "@admin/components/ui";
import { DeleteUserModal } from "@admin/components/modals";
import { setAuthTokens } from "@admin/actions";

export default function Content(): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [updateError, setUpdateError] = useState<ApolloError | undefined>(
    undefined
  );
  const { data: meData } = useQuery(ME_ACCOUNT_PROFILE, {
    errorPolicy: "ignore",
  });
  const [updateProfile] = useMutation(UPDATE_USER_PROFILE, {
    onCompleted: () => {
      setIsEditing(false);
    },
    onError: (error) => {
      console.error("Update Profile Error:", error);
      setUpdateError(error);
    },
  });
  const [deleteProfile] = useMutation(DELETE_USER_PROFILE, {
    onError: (error) => {
      console.error("Delete Profile Error:", error);
    },
  });
  const apolloClient = useApolloClient();
  const toast = useToast();
  const router = useRouter();
  const translate = useTranslations(TRANSLATES_NAMESPACES.ACCOUNT);
  const [_isPending, startTransition] = useTransition();
  const { setTransitionLoading } = useLoader();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const editButtonVariant = useColorModeValue("primary", "secondary");
  const deleteButtonVariant = useColorModeValue("danger-light", "danger-dark");
  const saveChangesButtonVariant = useColorModeValue(
    "success-light",
    "success-dark"
  );
  const iconsFill = useColorModeValue("fill-primary", "fill-secondary");

  const { control, register, handleSubmit, formState, reset } =
    useForm<TAccountSchema>({
      resolver: zodResolver(getAccountSchema(translate)),
      mode: "onSubmit",
      reValidateMode: "onSubmit",
      defaultValues: {
        [ACCOUNT_SCHEMA.FULL_NAME]: meData?.me.full_name || "",
        [ACCOUNT_SCHEMA.EMAIL]: meData?.me.email || "",
        [ACCOUNT_SCHEMA.USERNAME]: meData?.me.username || "",
        [ACCOUNT_SCHEMA.GENDER]: meData?.me.gender ?? undefined,

        [ACCOUNT_SCHEMA.HEIGHT_UNIT]: meData?.me.height?.unit ?? undefined,
        [ACCOUNT_SCHEMA.HEIGHT_VALUE]: meData?.me.height?.value ?? undefined,
        [ACCOUNT_SCHEMA.WEIGHT_UNIT]: meData?.me.weight?.unit ?? undefined,
        [ACCOUNT_SCHEMA.WEIGHT_VALUE]: meData?.me.weight?.value ?? undefined,

        [ACCOUNT_SCHEMA.GOALS]:
          meData?.me.goals?.map((goal) => ({
            value: goal ?? undefined,
            label: goal ? translate(`GOALS.${goal.toUpperCase()}`) : "",
          })) || [],
        [ACCOUNT_SCHEMA.FITNESS_LEVEL]: meData?.me.fitness_level ?? undefined,
        [ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE]:
          meData?.me.goal_weight?.value ?? undefined,
        [ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT]:
          meData?.me.goal_weight?.unit ?? undefined,

        [ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS]:
          meData?.me.performance?.max_pull_ups ?? undefined,
        [ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS]:
          meData?.me.performance?.max_push_ups ?? undefined,
        [ACCOUNT_SCHEMA.PERFORMANCE_SQUATS]:
          meData?.me.performance?.max_squats ?? undefined,
        [ACCOUNT_SCHEMA.PERFORMANCE_DIPS]:
          meData?.me.performance?.max_dips ?? undefined,
      },
    });

  useEffect(() => {
    if (meData?.me) {
      reset({
        [ACCOUNT_SCHEMA.FULL_NAME]: meData.me.full_name || "",
        [ACCOUNT_SCHEMA.EMAIL]: meData.me.email || "",
        [ACCOUNT_SCHEMA.USERNAME]: meData.me.username || "",
        [ACCOUNT_SCHEMA.GENDER]: meData.me.gender ?? undefined,

        [ACCOUNT_SCHEMA.HEIGHT_UNIT]: meData.me.height?.unit ?? null,
        [ACCOUNT_SCHEMA.HEIGHT_VALUE]: meData.me.height?.value ?? null,
        [ACCOUNT_SCHEMA.WEIGHT_UNIT]: meData.me.weight?.unit ?? null,
        [ACCOUNT_SCHEMA.WEIGHT_VALUE]: meData.me.weight?.value ?? null,

        [ACCOUNT_SCHEMA.GOALS]:
          meData.me.goals?.map((goal) => ({
            value: goal ?? undefined,
            label: goal ? translate(`GOALS.${goal.toUpperCase()}`) : "",
          })) || [],
        [ACCOUNT_SCHEMA.FITNESS_LEVEL]: meData.me.fitness_level ?? undefined,
        [ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE]:
          meData.me.goal_weight?.value ?? null,
        [ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT]: meData.me.goal_weight?.unit ?? null,

        [ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS]:
          meData.me.performance?.max_pull_ups ?? null,
        [ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS]:
          meData.me.performance?.max_push_ups ?? null,
        [ACCOUNT_SCHEMA.PERFORMANCE_SQUATS]:
          meData.me.performance?.max_squats ?? null,
        [ACCOUNT_SCHEMA.PERFORMANCE_DIPS]:
          meData.me.performance?.max_dips ?? null,
      });
    }
  }, [meData, reset]);

  useEffect(() => {
    if (updateError) {
      toast({
        title: "An error occurred.",
        description: updateError.message,
        position: "top-right",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [updateError, toast]);

  const toggleEdit = (): void => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = (data: TAccountSchema): void => {
    startTransition(async () => {
      setTransitionLoading(true);
      if (meData?.me) {
        const maxDips = data.performance_max_dips;
        const maxPullUps = data.performance_max_pull_ups;
        const maxPushUps = data.performance_max_push_ups;
        const maxSquats = data.performance_max_squats;

        const hasPerformanceData =
          maxDips || maxPullUps || maxPushUps || maxSquats;

        await updateProfile({
          variables: {
            input: {
              id: meData.me.id,
              full_name: data.full_name,
              email: data.email,
              username: data.username,
              gender: data.gender,
              height:
                data.height_value && data.height_unit
                  ? {
                      value: data.height_value,
                      unit: data.height_unit,
                    }
                  : undefined,
              weight:
                data.weight_value && data.weight_unit
                  ? {
                      value: data.weight_value,
                      unit: data.weight_unit,
                    }
                  : undefined,
              goals: data.goals
                ? data.goals.map((goal) => goal.value)
                : undefined,
              performance: hasPerformanceData
                ? {
                    max_dips: maxDips ?? undefined,
                    max_pull_ups: maxPullUps ?? undefined,
                    max_push_ups: maxPushUps ?? undefined,
                    max_squats: maxSquats ?? undefined,
                  }
                : undefined,
            },
          },
        })
          .then(async () => {
            try {
              await apolloClient.refetchQueries({
                include: [ME_ACCOUNT_PROFILE],
              });
            } catch (e) {
              console.error("Error on profile update", e);
            }
          })
          .finally(() => {
            setTransitionLoading(false);
          });
      }
    });
  };

  const handleDelete = (): void => {
    startTransition(() => {
      setTransitionLoading(true);

      if (meData?.me.id) {
        deleteProfile({
          variables: {
            input: {
              id: meData.me.id,
            },
          },
        })
          .then(async () => {
            try {
              await setAuthTokens({
                access_token: "",
                refresh_token: "",
              });
              await apolloClient.clearStore();
              await apolloClient.refetchQueries({
                include: [ME_DASHBOARD_LAYOUT, ME_ACCOUNT_PROFILE],
              });
              router.push(AdminPages.ROOT);
            } catch (e) {
              console.error("Error on logout", e);
            }
          })
          .catch((error) => {
            console.error("Error on profile deletion", error);
          })
          .finally(() => {
            setTransitionLoading(false);
          });
      } else {
        console.error("User ID is missing. Cannot delete profile.");
        setTransitionLoading(false);
      }
    });
  };

  const goalsOptions: GoalOption[] = Object.values(Goal).map((goal) => {
    return {
      value: goal,
      label: translate(`GOALS.${goal.toUpperCase()}`),
    };
  });

  const genderOptions = Object.values(Gender).map((gender) => {
    return {
      value: gender,
      label: translate(`GENDER.${gender.toUpperCase()}`),
    };
  });

  const weightUnitOptions = Object.values(WeightUnit).map((weightUnit) => {
    return {
      value: weightUnit,
      label: weightUnit.toLowerCase(),
    };
  });

  const heightUnitOptions = Object.values(HeightUnit).map((heightUnit) => {
    return {
      value: heightUnit,
      label: heightUnit.toLowerCase(),
    };
  });

  const fitnessLevelOptions = Object.values(FitnessLevel).map(
    (fitnessLevel) => {
      return {
        value: fitnessLevel,
        label: fitnessLevel.toLowerCase(),
      };
    }
  );

  const isGoogleConnected = meData?.me.google_id !== null;
  const isSpotifyConnected = meData?.me.spotify_id !== null;

  return (
    <>
      <Box
        as="form"
        bg={bgColor}
        minH="100vh"
        px={useBreakpointValue({ base: 4, md: 10 })}
        py={10}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="lg"
          boxShadow="lg"
          color={textColor}
          direction={{ base: "column", md: "row" }}
          gap={10}
          maxW="1000px"
          mx="auto"
          p={{ base: "16px", md: "24px" }}
        >
          <Box flex={1}>
            <VStack align="stretch" spacing="16px">
              <Heading as="h2" className="text-[18px]" variant="montserratBold">
                {isEditing
                  ? translate("HEADINGS.UPDATE_PROFILE")
                  : translate("HEADINGS.VIEW_PROFILE")}
              </Heading>

              {/* Account Details Section */}
              <SubBox>
                <Paragraph className="text-[16px]" variant="montserratSemibold">
                  {translate("PARAGRAPHS.ACCOUNT_DETAILS")}
                </Paragraph>

                <VStack align="stretch" spacing="16px">
                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.FULL_NAME]?.message
                      )}
                      placeholder={translate("FIELDS.FULL_NAME")}
                      {...register(ACCOUNT_SCHEMA.FULL_NAME)}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.FULL_NAME]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.FULL_NAME].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.USERNAME]?.message
                      )}
                      placeholder={translate("FIELDS.USERNAME")}
                      {...register(ACCOUNT_SCHEMA.USERNAME)}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.USERNAME]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.USERNAME].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.EMAIL]?.message
                      )}
                      placeholder={translate("FIELDS.EMAIL")}
                      {...register(ACCOUNT_SCHEMA.EMAIL)}
                      isDisabled={!isEditing}
                      type="email"
                    />
                    {formState.errors[ACCOUNT_SCHEMA.EMAIL]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.EMAIL].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Select
                      isDisabled={!isEditing}
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.GENDER]?.message
                      )}
                      placeholder="Male, Female, etc"
                      {...register(ACCOUNT_SCHEMA.GENDER)}
                    >
                      {genderOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    {formState.errors[ACCOUNT_SCHEMA.GENDER]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.GENDER].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>
                </VStack>
              </SubBox>

              {/* Physical Info Section */}
              <SubBox>
                <Paragraph className="text-[16px]" variant="montserratSemibold">
                  {translate("PARAGRAPHS.PHYSICAL_INFO")}
                </Paragraph>

                <VStack align="stretch" spacing="16px">
                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.HEIGHT_VALUE]?.message
                      )}
                      placeholder="Height (e.g., 170)"
                      type="number"
                      {...register(ACCOUNT_SCHEMA.HEIGHT_VALUE, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.HEIGHT_VALUE]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.HEIGHT_VALUE]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Select
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.HEIGHT_UNIT]?.message
                      )}
                      placeholder="Select unit"
                      {...register(ACCOUNT_SCHEMA.HEIGHT_UNIT)}
                      isDisabled={!isEditing}
                    >
                      {heightUnitOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    {formState.errors[ACCOUNT_SCHEMA.HEIGHT_UNIT]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.HEIGHT_UNIT].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.WEIGHT_VALUE]?.message
                      )}
                      placeholder="Weight (e.g., 70)"
                      type="number"
                      {...register(ACCOUNT_SCHEMA.WEIGHT_VALUE, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.WEIGHT_VALUE]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.WEIGHT_VALUE]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Select
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.WEIGHT_UNIT]?.message
                      )}
                      placeholder="Select unit"
                      {...register(ACCOUNT_SCHEMA.WEIGHT_UNIT)}
                      isDisabled={!isEditing}
                    >
                      {weightUnitOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    {formState.errors[ACCOUNT_SCHEMA.WEIGHT_UNIT]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.WEIGHT_UNIT].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>
                </VStack>
              </SubBox>

              {/* Goal Fitness Section */}
              <SubBox>
                <Paragraph className="text-[16px]" variant="montserratSemibold">
                  {translate("PARAGRAPHS.GOALS_FITNESS")}
                </Paragraph>

                <VStack align="stretch" spacing="16px">
                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Select
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.FITNESS_LEVEL]?.message
                      )}
                      placeholder={translate("FIELDS.FITNESS_LEVEL")}
                      {...register(ACCOUNT_SCHEMA.FITNESS_LEVEL)}
                      isDisabled={!isEditing}
                    >
                      {fitnessLevelOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    {formState.errors[ACCOUNT_SCHEMA.FITNESS_LEVEL]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.FITNESS_LEVEL]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <ControlledSelect
                      control={control}
                      isDisabled={!isEditing}
                      isMulti
                      name={ACCOUNT_SCHEMA.GOALS}
                      options={goalsOptions}
                      placeholder={translate("FIELDS.GOALS")}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.GOALS]?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {formState.errors[ACCOUNT_SCHEMA.GOALS].message}
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.GOAL_WEIGHT")}
                      type="number"
                      {...register(ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_VALUE]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Select
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.GOAL_WEIGHT_UNIT")}
                      {...register(ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT)}
                      isDisabled={!isEditing}
                    >
                      {weightUnitOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    {formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.GOAL_WEIGHT_UNIT]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>
                </VStack>
              </SubBox>

              {/* Performance */}
              <SubBox>
                <Paragraph className="text-[16px]" variant="montserratSemibold">
                  {translate("PARAGRAPHS.PERFORMANCE")}
                </Paragraph>

                <VStack align="stretch" spacing="16px">
                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.PERFORMANCE.PULL_UPS")}
                      type="number"
                      {...register(ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[
                              ACCOUNT_SCHEMA.PERFORMANCE_PULL_UPS
                            ].message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.PERFORMANCE.PUSH_UPS")}
                      type="number"
                      {...register(ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[
                              ACCOUNT_SCHEMA.PERFORMANCE_PUSH_UPS
                            ].message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_SQUATS]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.PERFORMANCE.SQUATS")}
                      type="number"
                      {...register(ACCOUNT_SCHEMA.PERFORMANCE_SQUATS, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_SQUATS]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_SQUATS]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>

                  <VStack alignItems="stretch" spacing="8px" width="100%">
                    <Input
                      isInvalid={Boolean(
                        formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_DIPS]
                          ?.message
                      )}
                      placeholder={translate("FIELDS.PERFORMANCE.DIPS")}
                      type="number"
                      {...register(ACCOUNT_SCHEMA.PERFORMANCE_DIPS, {
                        valueAsNumber: true,
                      })}
                      isDisabled={!isEditing}
                    />
                    {formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_DIPS]
                      ?.message ? (
                      <FormErrorBox>
                        <TextInfo type="error">
                          {
                            formState.errors[ACCOUNT_SCHEMA.PERFORMANCE_DIPS]
                              .message
                          }
                        </TextInfo>
                      </FormErrorBox>
                    ) : null}
                  </VStack>
                </VStack>
              </SubBox>

              {isEditing ? (
                <Button
                  type={"submit"}
                  size="xl"
                  variant={saveChangesButtonVariant}
                >
                  <Paragraph
                    className="text-[14px]"
                    variant="montserratSemibold"
                  >
                    {translate("BUTTONS.SAVE_CHANGES")}
                  </Paragraph>
                </Button>
              ) : null}
            </VStack>
          </Box>

          {/* Actions Section */}
          <Box
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderLeft={{ base: "none", md: "1px solid" }}
            flex="1"
            maxW={{ base: "100%", md: "300px" }}
            pl={{ base: 0, md: 8 }}
          >
            <Heading
              as="h3"
              className="text-[18px] mb-[16px]"
              variant="montserratBold"
            >
              {translate("HEADINGS.ACTIONS")}
            </Heading>

            <Stack spacing={4}>
              <Button
                onClick={toggleEdit}
                size="xl"
                variant={editButtonVariant}
              >
                <Paragraph className="text-[14px]" variant="montserratSemibold">
                  {isEditing
                    ? translate("BUTTONS.CANCEL")
                    : translate("BUTTONS.EDIT_PROFILE")}
                </Paragraph>
              </Button>
              <Button onClick={onOpen} size="xl" variant={deleteButtonVariant}>
                <Paragraph className="text-[14px]" variant="montserratSemibold">
                  {translate("BUTTONS.DELETE_ACCOUNT")}
                </Paragraph>
              </Button>
              <Button
                disabled
                size="xl"
                variant={useColorModeValue(
                  "outline-primary",
                  "outline-secondary"
                )}
              >
                <Box
                  alignItems="center"
                  display="flex"
                  gap="8px"
                  justifyContent="center"
                >
                  <Icons.Google className={`w-[24px] h-[24px] ${iconsFill}`} />
                  <Paragraph
                    className="text-[14px]"
                    variant="montserratSemibold"
                  >
                    {isGoogleConnected
                      ? translate("BUTTONS.GOOGLE_CONNECTED")
                      : translate("BUTTONS.CONNECT_GOOGLE")}
                  </Paragraph>
                </Box>
              </Button>

              <Button
                className="flex-row gap-[8px]"
                disabled
                size="xl"
                variant={useColorModeValue(
                  "outline-primary",
                  "outline-secondary"
                )}
              >
                <Box
                  alignItems="center"
                  display="flex"
                  gap="8px"
                  justifyContent="center"
                >
                  <Icons.Spotify className={`w-[24px] h-[24px] ${iconsFill}`} />
                  <Paragraph
                    className="text-[14px]"
                    variant="montserratSemibold"
                  >
                    {isSpotifyConnected
                      ? translate("BUTTONS.SPOTIFY_CONNECTED")
                      : translate("BUTTONS.CONNECT_SPOTIFY")}
                  </Paragraph>
                </Box>
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <DeleteUserModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDelete}
      />
    </>
  );
}
