import React, { useState } from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderPanel,
  Switcher,
  SwitcherDivider,
} from "carbon-components-react/lib/components/UIShell";

const DefaultPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            isActive
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel expanded={expanded} aria-labelledby="">
          <Switcher aria-labelledby="">
            <div>Themes</div>
            <SwitcherDivider />
          </Switcher>
        </HeaderPanel>
      </Header>
    </div>
  );
};

export default DefaultPage;
