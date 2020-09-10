import { connect } from "react-redux";
const ReduxPage = ({ counter, user, add, rename, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>{counter.count}</div>
      <div>
        {user.userName}+{user.age}
      </div>
      <button onClick={() => add()}>改变数字</button>
      <button onClick={() => rename()}>改变名字</button>
    </div>
  );
};

ReduxPage.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch({
    type: "update_name",
    value: {
      userName: "mike",
      age: 20,
    },
  });
  return await {
    name: "Redux Page",
  };
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    add() {
      dispatch({
        type: "add",
      });
    },
    rename() {
      dispatch({
        type: "update_name",
        value: {
          userName: "mike",
          age: 20,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ReduxPage);
