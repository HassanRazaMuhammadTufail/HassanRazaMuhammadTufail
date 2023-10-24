import React from "react";

import {
  HeaderFour,
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ExperienceStyle";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Experience = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Artistic Denim Mills (Fascom)</HeaderThree>
          <TagList>
            <Tag>Software Engineer - React Native Developer</Tag>
          </TagList>
          <HeaderFour>Mar 2022 - Jul 2023</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Working and Integration of Native Modules Like Banuba, Meicom, and
          AWS chime, AWS IVS, and live streaming.
          <br />- Use Native APIs for tight integrations with both platforms –
          Android and iOS.
          <br />- Write automated tests to ensure error-free code and
          performance.
          <br />- Work with third-party dependencies and APIs.
          <br />- Work with Redux architecture to improve the performance of the
          websites/mobile apps.
          <br />- Working with large teams and making successful products like
          Longaberger and KB-shop Apps.
        </CardInfo>
        <div></div>
        <UtilityList>
          <ExternalLinks
            href={
              "https://www.linkedin.com/in/ahsan-muneer/overlay/1635538440061/single-media-viewer/?profileId=ACoAAB09QVIBm1PJsyNgXjwRNJ_P3FveLEE3hAM"
            }
          >
            Experience Letter
          </ExternalLinks>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Outsource in Pakistan</HeaderThree>
          <TagList>
            <Tag>Sr. Executive - React Native Developer</Tag>
          </TagList>
          <HeaderFour>Apr 2021 - Mar 2022</HeaderFour>
        </div>
        <CardInfo className="card-info">
          - Contribute to all phases of the development life cycle.
          <br />- Develop and deploy new features to facilitate related
          procedures and tools if necessary.
          <br />- Designing the application according to specifications.
          <br />- Write well designed, testable, efficient code by using best
          software development practices.
          <br />- Integrate data from various back-end services and databases
          <br />- Making multiple white-label apps like the Restaurant App and
          Rider App, Booking App, and Bmad Dating App.
          <br />- Working small websites with Next.js and React.js, also make
          multiple APIs using nodejs.
        </CardInfo>
        <div></div>
        <UtilityList>
          <ExternalLinks
            href={
              "https://drive.google.com/file/d/1VcvodWu2yctXfSmXK4H1PcNK5yPSW0w_/view"
            }
          >
            Experience Letter
          </ExternalLinks>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 10,
          }}
        >
          <HeaderThree>Linkitsoft</HeaderThree>
          <TagList>
            <Tag>React Native Developer</Tag>
          </TagList>
          <HeaderFour>Aug 2020 - Apr 2021</HeaderFour>
        </div>

        <CardInfo className="card-info">
          - Develop and Design Android IOS mobile apps. Creating web and mobile
          APIs in Asp.net, Integrating Payment Systems like Gkash and Stripe
          payment. Also Integrating Firebase Cloud Messaging FCM, Push
          Notifications, Third-Party APIs Integrating and Google map APIs.
          Managing and Testing Mobile UI and UX.
          <br />- Working with a small team, multiple small apps like the
          Attendance App using a QR code, employee check-in and check-out using
          this app, the Foodosti App like Foodpanda working live tracking using
          Firebase socket, and Kiosk vendor app the In-App Purchase App using
          Gkash Payment Gateway.
        </CardInfo>
        <div></div>
        <UtilityList>
          <ExternalLinks
            href={
              "https://drive.google.com/file/d/10YkIzsLGZgQvwLmNFT07uKNzfRCCTeYn/view?usp=drive_link"
            }
          >
            Experience Letter
          </ExternalLinks>
        </UtilityList>
      </BlogCard>
    </GridContainer>
  </Section>
);

export default Experience;
