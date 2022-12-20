import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FormDefault } from "../../components/FormDefault/FormDefault";
import { setUser } from "../../store/slice/userSlice";

import { signInWithGoogle } from "../../firebase";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigateTo("/");
      })
      .catch(console.error);
  };

  const signUpWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      <FormDefault title="register" handleClick={handleRegister} />

      <button onClick={signInWithGoogle}>Sign with google</button>
      <button onClick={signUpWithFacebook}>Sign up with FB</button>
    </>
  );
};

export { SignUp };
