/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import React from "react";
import { useTranslation } from "react-i18next";
//Custom libraries
import { SectionContent } from "../../../layouts/sectionContentType";
import { StandardPageLayout } from "../../../layouts/standard-page";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { ChangePasswordSection } from "./ChangePasswordSection";
import { WelcomeUserSection } from "./WelcomeUserSection";
import Dashboard from "../../../widgets/dashboard/Dashboard";
import { DASHBOARD } from "../../../../constants/routes";
//UI
import {
  StyledGrid,
  StyledPaper,
  StyledTypography,
  StyledSidebar,
} from "../../../StyledUI";

/**
 * Account component
 * display account details
 * @param props
 */
function AccountSummary() {
  const { t } = useTranslation();
  const title = t("AccountSummary.Title");
  const sectionOne: SectionContent[] = [
    {
      key: "account-summary-b2b-page",
      CurrentComponent: () => {
        return (
          <>
            <StyledTypography variant="h4" className="vertical-margin-4">
              {title}
            </StyledTypography>
            <StyledGrid container spacing={2}>
              <StyledGrid item xs={12} sm={5} md={3} className="sidebar">
                <StyledSidebar
                  title={t("Dashboard.Title")}
                  sidebarContent={<Dashboard />}
                  linkTo={DASHBOARD}
                />
              </StyledGrid>
              <StyledGrid container item xs={12} sm={7} md={9}>
                <StyledGrid item xs={12} className="bottom-margin-2">
                  <StyledPaper className="vertical-padding-2 horizontal-padding-2">
                    <WelcomeUserSection />
                  </StyledPaper>
                </StyledGrid>
                <StyledGrid item xs={12}>
                  <StyledPaper className="vertical-padding-2 horizontal-padding-2">
                    <StyledGrid container spacing={2}>
                      <StyledGrid item xs={12} md={6} lg={5}>
                        <PersonalInformationSection />
                      </StyledGrid>
                      <StyledGrid item xs={12} md={6} lg={5}>
                        <ChangePasswordSection />
                      </StyledGrid>
                    </StyledGrid>
                  </StyledPaper>
                </StyledGrid>
              </StyledGrid>
            </StyledGrid>
          </>
        );
      },
    },
  ];
  return <StandardPageLayout cid="my-account-b2b" sectionOne={sectionOne} />;
}

export default AccountSummary;
