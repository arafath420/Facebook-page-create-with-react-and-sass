import { Link } from "react-router-dom";
import Card from "../../component/Card/Card";
import Meta from "../../component/Meta/Meta";
import "./Auth.scss";

const Auth = () => {
  return (
    <>
      <Meta title={"Facebook - log in or sign up"} />
      <div className="fb-auth-area">
        <div className="fb-auth-container">
          <div className="fb-auth-left">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="fb-auth-right">
            <Card>
              <div className="login-fomr-area">
                <form action="" className="login-form">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                  />
                  <input type="password" placeholder="Password" />
                  <button type="submit">Log in</button>
                </form>

                <Link
                  to={
                    "https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzAzMDkwMjQzLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login"
                  }
                >
                  Forgotten password?
                </Link>
                <div className="create-account-button">
                  <button>Create new account</button>
                </div>
              </div>
            </Card>
            <div className="create-page">
              <Link
                to={
                  "https://www.facebook.com/pages/create/?ref_type=registration_form"
                }
              >
                Create a Page
              </Link>
              for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
