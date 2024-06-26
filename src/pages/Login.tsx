import { LoginForm } from "@/components/forms/LoginForm";
import logo from "@/assets/logo.png"

export function Login() {
    return (
        <>
            <div className="flex gap-1 text-2xl tracking-widest">
                <img
                    loading="lazy"
                    src={logo}
                    className="shrink-0 w-12"
                />
                <div className="my-auto">Airo</div>
            </div>
            <LoginForm />
        </>
    )
}