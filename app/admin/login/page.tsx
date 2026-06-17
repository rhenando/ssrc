import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-light p-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-card">
        <h1 className="font-head text-3xl font-black text-navy">SSRC CMS Login</h1>
        <p className="mt-2 text-sm text-muted">Use a Supabase Auth admin account.</p>
        <LoginForm />
      </div>
    </div>
  );
}
