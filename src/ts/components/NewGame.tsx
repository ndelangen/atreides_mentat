import * as React from "react";
import { useDispatch } from "react-redux";
import { ALL_HOUSE_NAMES, houseNameStr, HouseName } from "ts/houses";
import { showOverview, initHouses } from "ts/state/actions";
import { InitHousePayload } from "ts/state/types";

const HouseSelect: React.FC<{
  house: HouseName;
  checked: boolean;
  onClick: () => void;
}> = props => {
  const [checked, setChecked] = React.useState<boolean>(false);
  let className = "button";
  if (props.checked) {
    className += " is-success";
  }
  return (
    <button className={className} onClick={props.onClick}>
      <div>{houseNameStr(props.house)}</div>
    </button>
  );
};

export default () => {
  const [state, setState] = React.useState<InitHousePayload>({
    harkonen: false,
    emperor: false,
    guild: false,
    bene: false,
    fremen: false,
  });

  let allow_start = false;
  for (let i of ALL_HOUSE_NAMES) {
    if (state[i]) {
      allow_start = true;
      break;
    }
  }
  const dispatch = useDispatch();
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="title is-1">New game</p>
          <p className="subtitle is-5">Select which houses are present in the game</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="buttons is-centered">
            {ALL_HOUSE_NAMES.map(name => (
              <HouseSelect
                house={name}
                checked={state[name]}
                onClick={() => {
                  const new_checked = !state[name];
                  setState({ ...state, [name]: new_checked });
                }}
                key={name}
              />
            ))}
          </div>
          <div className="buttons is-centered">
            <button
              className="button is-primary is-fullwidth"
              disabled={!allow_start}
              onClick={() => {
                if (allow_start) {
                  dispatch(initHouses(state));
                  dispatch(showOverview());
                }
              }}
            >
              Start game
            </button>
          </div>
        </div>
      </section>
    </>
  );
};