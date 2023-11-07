import SocialLogin from '@/src/components/common/SocialLogin';
import Form from '@/src/components/pages/signup/Form';
import Link from 'next/link';

const SignUp = () => {
  return (
    <section className="our-log bgc-f9">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-5">
            <div className="login_form mt60-sm">
              <h2 className="title">Sign up</h2>
              <p>
                Already have a profile? <Link href="/login">Sign in.</Link>
              </p>
              <Form />
            </div>
          </div>
          {/* End .col */}

          <div className="col-md-6 col-lg-5 offset-xl-1 col-xl-5 offset-xl-2">
            <div className="login_with">
              <h2 className="title">Connect With Social</h2>
              <SocialLogin />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default SignUp;
