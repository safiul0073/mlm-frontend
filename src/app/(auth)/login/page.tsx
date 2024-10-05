"use client";
import { useQueryMutation } from "@/hooks/mutate/useQueryMutation";
import { useAuthStore } from "@/providers/AuthStoreProviders";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/Button";

const Login = () => {
  const { login } = useAuthStore();
  const router = useRouter();
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const {
    mutate,
    isLoading,
    isError,
    backendErrors: errors,
  } = useQueryMutation({
    isPublic: true,
    url: "/auth/login",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(credentials, {
      onSuccess: (response) => {
        const data = response.data?.data;
        Cookies.set(
          process.env.NEXT_PUBLIC_TOKEN_NAME as string,
          data?.json_object.token,
        );
        login(data?.json_object.token, data?.json_object.user);
        router.push("/dashboard");
      },
      onError: (error) => {
        // console.log(error);
      },
    });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col gap-6 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/dashboard"
          className="flex items-center justify-center bg-transparent sm:bg-[#c3efe9] sm:dark:bg-transparent"
        >
          <Image
            src="/image.png"
            height="50"
            width="50"
            className="h-10 w-auto mr-3"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            Logo Here
          </span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="jhonDoe"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-start">
                  <span className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </span>
                  <span className="ml-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </span>
                  </span>
                </label>
                <Link
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <Button loading={isLoading} type="submit">
                Sign in
              </Button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet?{' '}
								<Link
									href="#"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500">
									Sign up
								</Link>
							</p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
