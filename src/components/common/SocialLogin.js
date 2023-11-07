'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { signInWithGoogle } from '@/src/stores/auth/action';

const SocialLogin = () => {
  const dispatch = useDispatch();
  
  const socialBtns = [
    {
      className: 'btn btn_fb',
      iconClass: 'fab fa-facebook-f',
      text: 'Log In via Facebook',
      onClick: () => console.log('You clicked on Facebook button'),
    },
    {
      className: 'btn btn_google',
      iconClass: 'fab fa-google',
      text: 'Log In via Google+',
      onClick: () => dispatch(signInWithGoogle()),
    },
  ];

  return (
    <div className="social_btn">
      {socialBtns.map((btn, index) => (
        <React.Fragment key={index}>
          <button className={btn.className} onClick={btn.onClick}>
            <span className={btn.iconClass} />
            {btn.text}
          </button>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLogin;
