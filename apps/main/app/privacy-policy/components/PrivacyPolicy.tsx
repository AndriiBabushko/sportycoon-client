"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import React, { FC } from "react";
import { MyAccordion } from "@/components/ui";

export const PrivacyPolicy: FC = () => {
  return (
    <Flex direction={"column"} gap={"3"} width={"100%"}>
      <Heading as={"h1"}>Privacy Policy</Heading>
      <Text>
        SportyCoon is provided by SPORTYCOON LLC, hereinafter referred to as
        &quot;SportyCoon&quot;. This Privacy Policy provides information on how
        we use and protect your data on SportyCoon. By using SportyCoon, you
        accept the terms set forth in this Privacy Policy. If you do not agree
        with these terms, please do not use SportyCoon. This Privacy Policy
        applies to all members from the time they first log in to SportyCoon,
        thereby acknowledging acceptance of this Privacy Policy.
      </Text>
      <MyAccordion
        items={[
          {
            id: "jsd32fnjksa532fnjvksv",
            title: "General",
            description:
              "SportyCoon relies heavily on the publication of information regarding " +
              "individual users to other users by making them accessible via the " +
              "SportyCoon mobile application. All users can freely access public " +
              "profile information (picture, first name, last name, and location), " +
              "training information (workout times and repetitions), and network " +
              "information (followers and followings) of all other users. SportyCoon " +
              "application users do not have the option to change that. Additionally, " +
              "names and training information of users will be used for SportyCoon " +
              "leaderboards inside the application that can be displayed by all users." +
              "By using the application, users explicitly consent that other users " +
              "may see the information named above and it may be used for SportyCoon " +
              "leaderboards. If users do not want other users to access their information, " +
              "they must leave their profile empty and ensure not to save any workouts. " +
              "If they accidentally do so, they must delete them in their profile." +
              "Email addresses will not be shared with any other user unless made " +
              "publicly available via a user's profile intentionally. They may, " +
              "however, be automatically added to the SportyCoon mailing lists. " +
              "From time to time, SportyCoon may email you electronic newsletters, " +
              "announcements, surveys, or other information. If you prefer not to " +
              "receive any or all of these communications, you may opt out by " +
              "following the directions provided within the electronic " +
              "newsletters and announcements.",
          },
          {
            id: "jsd32fnjksa532fnjvfsv",
            title:
              "Types of Personally Identifiable Information Collected by SportyCoon",
            description:
              "SportyCoon collects different types of personally identifiable information " +
              "from users upon registration and in connection with the usage of the " +
              "SportyCoon application. The personally identifiable information collected " +
              "by SportyCoon belongs to the following categories: Profile information that " +
              "users can freely enter, change, and delete via settings such as first name, " +
              "last name, location, and gender. Training information that will be stored " +
              "when users save performances such as workout times for strength and cardio " +
              "workouts, exercise repetitions for MAX workouts, and comments. Network " +
              "information that are generated when users are following or are being " +
              "followed by other users such as followers, followings, comments, and likes. " +
              "Email addresses",
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
              "such use of the User Content. Personally identifiable information shall be saved " +
              "and used, in particular, to offer new applications to the members, to improve " +
              "such applications, and adapt them to the users' needs.",
          },
          {
            id: "jsd32fnjksa53gfnjvfsf",
            title:
              "Use and Sharing of Personally Identifiable and Non-Personally Identifiable Information with Third Parties",
            description:
              "By registering, the user explicitly agrees that SportyCoon shall have the right " +
              "to use all automatically collected personally identifiable information for " +
              "purposes of the SportyCoon application and future web services. SportyCoon " +
              "does not sell, trade, or otherwise transfer users' personally identifiable " +
              "information to outside parties. This does not include trusted third parties " +
              "who assist us in operating our application and conducting our business, so " +
              "long as those parties agree to keep this information confidential. SportyCoon " +
              "may also release users' information when we believe release is appropriate to " +
              "comply with the law, enforce our site policies, or protect ours or others' " +
              "rights, property, or safety. SportyCoon may also pass personally identifiable " +
              "information to third parties if the user explicitly gives permission. " +
              "SportyCoon implements all reasonable measures to prevent unauthorized " +
              "access by third parties to saved details. However, SportyCoon assumes " +
              "no liability for the interception, alteration, or misuse of the information " +
              "you provide other users by other users. The user explicitly consents that " +
              "SportyCoon may provide non-personally identifiable information to other " +
              "parties for marketing, advertising, or other uses.",
          },
        ]}
      />
    </Flex>
  );
};
