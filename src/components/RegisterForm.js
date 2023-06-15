import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from './FormElements';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import './Icon';
// import axios from 'axios';

function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);

      // const { name, email, tel, password, confirmPassword } = data;
      // Perform form submission operations
      // ...
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className='bg-light full-height'>
      <div className='container vh-100 vw-50 d-flex'>
        <div className='row  justify-content-center align-items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='shadow py-4 px-5 rounded-3 justify-content-center align-items-center bg-light bg-opacity-25'
            style={{ zIndex: '1' }}
          >
            <div
              className='bg-secondary px-4 py-3 rounded-3'
              style={{ width: '495px', height: '640px' }}
            >
              <h4 className='fw-bold text-center'>註冊</h4>
              <div className='mb-1'>
                <Input
                  id='name'
                  type='text'
                  errors={errors}
                  labelText='帳號名稱'
                  register={register}
                  rules={{
                    required: '帳號名稱為必填',
                  }}
                ></Input>
              </div>
              <div className='mb-1'>
                <Input
                  id='email'
                  labelText='信箱'
                  type='email'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '信箱為必填',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: '信箱格式不正確',
                    },
                  }}
                ></Input>
              </div>
              {/* <div className='mb-1'>
                <Input
                  id='tel'
                  labelText='手機號碼'
                  type='tel'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '手機號碼為必填',
                    minLength: {
                      value: 6,
                      message: '手機號碼不少於 6 碼',
                    },
                    maxLength: {
                      value: 12,
                      message: '手機號碼不超過 12 碼',
                    },
                  }}
                ></Input>
              </div> */}
              <div className='mb-1'>
                <Input
                  id='password'
                  labelText='密碼'
                  type='password'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '密碼為必填',
                    minLength: {
                      value: 6,
                      message: '密碼長度不少於 6',
                    },
                  }}
                ></Input>
              </div>
              <div className='mb-1'>
                <Input
                  id='confirmPassword'
                  labelText='確認密碼'
                  type='password'
                  errors={errors}
                  register={register}
                  rules={{
                    required: '確認密碼為必填',
                    minLength: {
                      value: 6,
                      message: '確認密碼長度不少於 6',
                    },
                  }}
                ></Input>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <button
                  type='submit'
                  className='btn btn-primary py-3 px-7 rounded-2 d-flex align-items-center justify-content-center'
                  disabled={submitting}
                  style={{ color: '#fff', width: '113px', height: '38px' }}
                >
                  {submitting ? '正在註冊...' : '註冊'}
                </button>
              </div>
              <div className='py-3 d-flex flex-column align-items-center justify-content-center'>
                <GoogleLogin
                  // className='w-100%'
                  theme='outline'
                  logo_alignment='center'
                  width='400px'
                  size='large'
                  shape='rectangular'
                  text='signup_with'
                  context='signup'
                  onSuccess={responseMessage}
                  onError={errorMessage}
                />
                <LoginSocialFacebook
                  appId='672335331385748'
                  onResolve={(response) => {
                    console.log(response);
                  }}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton
                    className='mt-2 d-flex justify-content-center'
                    style={{ width: '396px', height: '40px' }}
                  >
                    <span className='fs-6 fw-light'>使用facebook帳戶註冊</span>
                  </FacebookLoginButton>
                </LoginSocialFacebook>
                <a href='/' className='text-dark text-decoration-none fw-normal'>
                  <p>已經有帳號了嗎?登入</p>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
