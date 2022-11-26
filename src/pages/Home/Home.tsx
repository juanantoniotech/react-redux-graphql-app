import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../store/slices/chars";
import { AppDispatch } from "../../store/store";

export type Props = {};

const Home: React.FC<Props> = (props) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return <div>Home</div>;
};

export default Home;
