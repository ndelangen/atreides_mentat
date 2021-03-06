import React from "react";
import { useSelector } from "react-redux";
import GameOverview from "ts/components/GameOverview";
import NewGame from "ts/components/NewGame";
import { root_state_t } from "ts/state/reducers";

const GameContainer: React.FC = () => {
  const state = useSelector((state: root_state_t) => {
    return state.game;
  });

  if (!state.initialized) {
    return <NewGame />;
  } else {
    return <GameOverview />;
  }
};

export default GameContainer;
