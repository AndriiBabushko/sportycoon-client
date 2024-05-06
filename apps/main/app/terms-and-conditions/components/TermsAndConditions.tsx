"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import React, { FC } from "react";
import { MyAccordion } from "@/components/ui";

export const TermsAndConditions: FC = () => {
  return (
    <Flex direction={"column"} gap={"3"} width={"100%"}>
      <Heading as={"h1"} color={"gray"}>
        Terms and Conditions
      </Heading>
      <Text color={"gray"}>
        Welcome to SportyCoon, provided by Sportycoon LLC. These Terms and
        Conditions govern your use of the SportyCoon website, mobile
        application, and related services. By accessing or using the Service,
        you agree to be bound by these Terms.
      </Text>
      <MyAccordion
        items={[
          {
            id: "jsd32fnjksa532fnjvksv",
            title: "Acceptance of Terms",
            description:
              "By accessing or using the SportyCoon application or website, you " +
              "agree to be bound by these Terms and all applicable laws and " +
              "regulations. If you do not agree with any of these Terms, you " +
              "are prohibited from using or accessing the SportyCoon " +
              "application or website.",
          },
          {
            id: "jsd32fnjksa532fnjvfsv",
            title: "Use License",
            description:
              "Permission is granted to temporarily download one copy of the materials " +
              "(information or software) on SportyCoon's application or website for personal, " +
              "non-commercial transitory viewing only. This is the grant of a license, not a " +
              "transfer of title. This license shall automatically terminate if you violate any " +
              "of these restrictions and may be terminated by SportyCoon at any time. Upon " +
              "terminating your viewing of these materials or upon the termination of this " +
              "license, you must destroy any downloaded materials in your possession whether " +
              "in electronic or printed format.",
          },
          {
            id: "jsd32fnjksa532fnjvfsf",
            title: "User Content",
            description:
              "By posting, uploading, or submitting any content on or through the " +
              'SportyCoon application or website (collectively, "User Content"), you grant ' +
              "SportyCoon a worldwide, non-exclusive, royalty-free, fully paid-up, perpetual, " +
              "irrevocable, sublicenseable, and transferable license to use, reproduce, modify, " +
              "adapt, translate, distribute, publish, create derivative works based on, perform, " +
              "display, and otherwise exploit such User Content, in whole or in part, in any " +
              "media formats and through any media channels, and to use the name, likeness, " +
              "and voice of any individual depicted in such User Content, in connection with " +
              "such use of the User Content.",
          },
          {
            id: "jsd32fnjksa53gfnjvfsf",
            title: "Disclaimer",
            description:
              "The materials on SportyCoon's application and website are provided on an 'as is' " +
              "basis. SportyCoon makes no warranties, expressed or implied, and hereby disclaims " +
              "and negates all other warranties including, without limitation, implied warranties " +
              "or conditions of merchantability, fitness for a particular purpose, or non-infringement " +
              "of intellectual property or other violation of rights. Further, SportyCoon does not " +
              "warrant or make any representations concerning the accuracy, likely results, or " +
              "reliability of the use of the materials on its application or website or otherwise " +
              "relating to such materials or on any sites linked to this site.",
          },
          {
            id: "jsd3ffgjksa53gfnjvfsf",
            title: "Limitations",
            description:
              "In no event shall SportyCoon or its suppliers be liable for any " +
              "damages (including, without limitation, damages for loss of data or profit, " +
              "or due to business interruption) arising out of the use or inability to use " +
              "the materials on SportyCoon's application or website, even if SportyCoon or " +
              "a SportyCoon authorized representative has been notified orally or in writing " +
              "of the possibility of such damage. Because some jurisdictions do not allow " +
              "limitations on implied warranties, or limitations of liability for consequential " +
              "or incidental damages, these limitations may not apply to you.",
          },
          {
            id: "jsd3ffgjkxa53gfgjvfsf",
            title: "Revisions and Errata",
            description:
              "The materials appearing on SportyCoon's application or website could " +
              "include technical, typographical, or photographic errors. SportyCoon does not " +
              "warrant that any of the materials on its application or website are accurate, " +
              "complete, or current. SportyCoon may make changes to the materials contained on " +
              "its application or website at any time without notice. SportyCoon does not, " +
              "however, make any commitment to update the materials.",
          },
          {
            id: "jsd3ffgjksa53gfgavfsf",
            title: "Governing Law",
            description:
              "Any claim relating to SportyCoon's application or website shall be " +
              "governed by the laws of the Ukraine. Ukraine without regard to its conflict of " +
              "law provisions.",
          },
          {
            id: "jsd3ffgjksa53gggjvfsf",
            title: "Changes to Terms",
            description:
              "SportyCoon may revise these Terms of Use for its application or website at any " +
              "time without notice. By using this application or website you are agreeing to be " +
              "bound by the then-current version of these Terms of Use.",
          },
          {
            id: "jsd3ffgjvsa53gfgjvfsf",
            title: "Contact Information",
            description:
              "If you have any questions or concerns about these Terms of Use, please contact us at sportycoon@gmail.com",
          },
        ]}
      />
    </Flex>
  );
};
