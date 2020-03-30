# Morgorithm API
- user
  - isLoggedIn
  - profile
    - id
    - username
    - email
    - name
    - group
      - id
      - name
      - members_count
    - problem_groups
      - id
      - name
      - problems_count
      - solved_problems_count
    - problems_count
    - solved_problems_count
    - questions_count
  - currentUser
    - id
    - username
    - email
    - name
    - group
      - id
      - name
      - members_count
    - problems_count
    - solved_problems_count
    - questions_count
  - group
    - id
    - name
    - members
    - members_count
  - searchedGroup
    - id
    - name
    - members_count
- problem
  - problemList
    - id
    - origin
      - id
      - level
      - url
      - number
      - category
      - title
      - remark
    - is_solved
    - solved_time
  - searchedProblemList
    - id
    - origin
      - id
      - level
      - url
      - number
      - category
      - title
      - remark
    - is_solved
    - solved_time
- solution
  - solutionList
    - id
    - creator
      - id
      - username
      - name
    - lang
    - solved
    - view
    - comment_count
    - like_count
  - questionList
    - id
    - creator
      - id
      - username
      - name
    - lang
    - solved
    - view
    - comment_count
  - currentSolution
    - id
    - creator
      - id
      - username
      - name
    - code
    - lang
    - caption
    - view
    - solved
    - likes
      - id
      - username
      - name
    - like_count
    - comments
      - id
      - creator
      - message
      - likes
      - like_count
      - sub_comments
        - id
        - creator
        - message
        - likes
        - like_count
    - comment_count

## 더 필요한 API
- [x] getUser (userInfo) (request data : userId)
- [x] getGroup (detail) (request data : groupId)
- [x] getProblems
  - request data
    - group : all or probGroupId
    - category : array of category
    - level
    - solved : [[solved], [unsolved]]
    - keyword
- [x] getProblemsQuestions (request data : originId(originProb))
- [ ] 문제를 풀거나 뭐 했을때 숫자 바꾸고 가져오는 API

## AppContainer
### getState
- isLoggedIn
- user
### dispatch
- copyAndGetProbs ( useEffect(isLoggedIn) )

## SignIn
### dispatch
- signIn
- 

### SignUp (InputEmail, InputUser)
### dispatch
- checkUnique
- sendConfirmCode
- signUp