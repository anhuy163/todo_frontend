import AuthLayout from "@/src/containers/AuthLayout";
import RegisterForm from "@/src/components/RegisterForm";

export default function LoginPage() {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
}
