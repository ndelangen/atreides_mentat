import * as React from "react";
import { house_name_t } from "ts/houses";

import { ReactComponent as AtreidesIcon } from "assets/atreides.svg";
import { ReactComponent as BeneIcon } from "assets/bene_gesserit.svg";
import { ReactComponent as EmperorIcon } from "assets/emperor.svg";
import { ReactComponent as FremenIcon } from "assets/fremen.svg";
import { ReactComponent as HarkonnenIcon } from "assets/harkonnen.svg";
import { ReactComponent as GuildIcon } from "assets/spacing_guild.svg";

const icon_map = {
  ATREIDES: <AtreidesIcon width={64} />,
  "BENE GESSERIT": <BeneIcon width={64} />,
  EMPEROR: <EmperorIcon width={64} />,
  FREMEN: <FremenIcon width={64} />,
  HARKONNEN: <HarkonnenIcon width={64} />,
  "SPACING GUILD": <GuildIcon width={64} />,
};

const HouseBanner: React.FC<{ house: house_name_t | null }> = props => {
  let icon;
  if (props.house !== null) {
    icon = icon_map[props.house];
  } else {
    icon = <div style={{ height: 64, width: 64 }} />;
  }
  return (
    <div className="columns is-vcentered">
      <div className="column is-2">{icon}</div>
      <div className="column">
        <h2 className="title is-3">{props.house ? props.house : "None"}</h2>
      </div>
    </div>
  );
};
export default HouseBanner;
