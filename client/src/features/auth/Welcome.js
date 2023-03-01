import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { selectCurrentUser, selectCurrentToken, selectIsAuthenticated } from "./authSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  
 var decoded = jwt_decode(token);
 console.log(decoded);

  const welcome = decoded ? `Welcome ${decoded.name}!` : "Welcome!";
  const tokenAbbr = `Your JWT token is: ${token}`;
  const content = (
    <section className="welcome text-center mt-12 bg-gradient-to-r from-indigo-500">
      <h1 className="text-lg">{welcome}</h1>
      <h2 className="text-lg"> {tokenAbbr}</h2>
    </section>
  );

  return content;
};
export default Welcome;
