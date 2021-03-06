import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as probActions } from "../../redux/modules/problem";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default () => {
  const [userState, setUserState] = useState(null);
  const [statusState, setStatusState] = useState(null);
  const [probGroupState, setProbGroupState] = useState(null);
  const [problemState, setProblemState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const { user: { profile } } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(userActions.getUser(profile.username)).then(user => {
    //   if (user) {
    //     setUserState({
    //       id: user.id,
    //       username: user.username,
    //       name: user.name,
    //       email: user.email,
    //       avatar: user.avatar,
    //       is_social: user.is_social,
    //       group: user.group
    //     });
    //     setStatusState({
    //       problemsCount: user.problems_count,
    //       solvedCount: user.solved_problems_count,
    //       questionsCount: user.questions_count
    //     });
    //   }
    // });
    // if (user) {
    setUserState({
      id: profile.id,
      username: profile.username,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
      is_social: profile.is_social,
      group: profile.group
    });
    setStatusState({
      problemsCount: profile.problems_count,
      solvedCount: profile.solved_problems_count,
      questionsCount: profile.questions_count
    });
    // }
    dispatch(probActions.getProblems({})).then(pres => {
      if (pres) setProblemState(pres);
    });
    dispatch(solsActions.getQuestions(profile.username)).then(qres => {
      if (qres) setQuestionState(qres);
    });
  }, [profile]);

  useEffect(() => {
    if (!!profile && profile.problem_groups !== undefined) {
      setProbGroupState({
        probGroup: profile.problem_groups
      });
    }
  }, [profile]);

  return (
    <Presenter
      user={userState}
      status={statusState}
      probGroups={probGroupState}
      problems={problemState}
      questions={questionState}
    />
  );
};
