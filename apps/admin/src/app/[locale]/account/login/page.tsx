import { LoginForm } from "./components";

export default function Login() {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700">Login</h1>
      <LoginForm />
    </div>
  );
}
