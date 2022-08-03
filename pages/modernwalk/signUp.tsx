import React, { useState, useCallback } from "react";
import { BallBeat } from "react-pure-loaders";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@components/Button/Button.component";
import Input from "@components/Input/Input.component";
import { validateSignUp } from "@utils/helpers";
import { createUser } from "@services/users.services";
import { IUser } from "@interfaces/users/users.interfaces";
import { IValidationProps } from "@interfaces/global/global.interface";
import style from "@styles/SignUp.module.scss";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<IValidationProps[]>(
    []
  );

  //const navigate = useNavigate();
  const router = useRouter();

  const handleFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    []
  );
  const handleLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    []
  );
  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsList = validateSignUp(firstName, lastName, email, password);

    if (errorsList.length === 0) {
      setValidationErrors(errorsList);
      registerUser(firstName, lastName, email, password);
    } else {
      setValidationErrors(errorsList);
    }
  };

  const registerUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const userData: IUser = {
      firstName,
      lastName,
      email,
      password,
    };

    setLoading(true);
    const response = await createUser(userData);
    setLoading(false);

    if (!response.error) {
      if (response?.status === 201) {
        console.log("User Created successfully", response.status);
        clearFields();
        router.push("/signIn");
      } else {
        setError("Something went wrong");
      }
    } else {
      setError(response.error.message);
    }
  };

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.formContainer}>
        <div className={style.header}>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 text-center">
            Sign Up
          </h2>
        </div>
        {error && (
          <div className="flex items-center justify-center py-1">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            onChange={handleFirstName}
            value={firstName}
            error={
              validationErrors &&
              validationErrors.find((item) => item.firstName)?.firstName
            }
          />

          <Input
            label="Last Name"
            name="lastName"
            type="text"
            onChange={handleLastName}
            value={lastName}
            error={
              validationErrors &&
              validationErrors.find((item) => item.lastName)?.lastName
            }
          />

          <Input
            name="email"
            type="text"
            label="Email"
            onChange={handleEmail}
            value={email}
            error={
              validationErrors &&
              validationErrors.find((item) => item.email)?.email
            }
          />

          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handlePassword}
            value={password}
            error={
              validationErrors &&
              validationErrors.find((item) => item.password)?.password
            }
          />

          <div className={style.loadingContainer}>
            <BallBeat color={"#2BD9AF"} loading={loading} />
          </div>
          <div className={style.btnContainer}>
            <Button name="Sign Up" disable={loading} />
          </div>
          <div className={style.SignInLinkContainer}>
            <label htmlFor="">Do you have an account?</label>
            <Link href="/signIn">
              <p>Sign in</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
