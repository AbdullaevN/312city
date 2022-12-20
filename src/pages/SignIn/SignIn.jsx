import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FormDefault } from "../../components/FormDefault/FormDefault";
import { setUser } from "../../store/slice/userSlice";

// export const SignIn = () => {
//   return (
//     <>
//       <div className="container mx-auto p-8 flex">
//         <div className="max-w-md w-full mx-auto">
//           <h1 className="text-4xl text-center mb-12 font-thin">Company</h1>

//           <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
//             <div className="p-8">
//               <form
//                 method="POST"
//                 className=""
//                 action="#"
//                 // onSubmit="return false;"
//               >
//                 <div className="mb-5">
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-600"
//                   >
//                     Email
//                   </label>

//                   <input
//                     type="text"
//                     name="email"
//                     className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
//                   />
//                 </div>

//                 <div className="mb-5">
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-600"
//                   >
//                     Password
//                   </label>

//                   <input
//                     type="text"
//                     name="password"
//                     className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
//                   />
//                 </div>

//                 <button className="w-full p-3 mt-4 bg-[#FF961F] text-white rounded shadow">
//                   Login
//                 </button>
//               </form>
//             </div>

//             <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
//               <Link to={"/sign-up"} className="font-medium text-indigo-500">
//                 Создать аккаунт
//               </Link>

//               {/* <a href="#" className="text-gray-600">
//                 Forgot password?
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// //

const SignIn = () => {
  const dispatch = useDispatch();
  // const { push } = useNavigate();

  const navigateTo = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("Invalid user!"));
  };
  return (
    <>
      <FormDefault title="sign in" handleClick={handleLogin} />
    </>
  );
};

export { SignIn };
