import AuthLayout from "@/src/containers/AuthLayout";
import LoginForm from "@/src/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
}
