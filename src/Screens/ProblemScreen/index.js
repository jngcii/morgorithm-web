import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default () => {
  const [solutionState, setSolutionState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const {
    state: { problemId }
  } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(solsActions.getProblemsQuestions(problemId)).then(qres => {
      if (qres) setQuestionState(qres);
    });
    dispatch(solsActions.getProblemsSolutions(problemId)).then(sres => {
      if (sres) setSolutionState(sres);
    });
  }, []);

  return <Presenter solutionList={solutionState} questionList={questionState} />;
};
