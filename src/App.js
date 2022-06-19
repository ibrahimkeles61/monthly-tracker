import "./App.css";
import Navi from "./components/Navi";
import MainWindow from "./components/MainWindow";
import RightMenu from "./components/RightMenu";
import HappyBalls from "./components/HappyBalls";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider, emailPasswordProvider } from "./firebase";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignInGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => dispatch(setUserLogOutState()))
      .catch((err) => alert(err.message));
  };

  if (!userName) {
    handleSignInGoogle();
  }

  return (
    <div className="app">
      <Navi />
      <RightMenu />
      <MainWindow />
      {/* <HappyBalls /> */}
    </div>
  );
}

export default App;
