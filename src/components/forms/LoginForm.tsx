"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import logo from "@/assets/logo.png"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    email: z
        .string()
        .min(2, { message: "email must be not empty" })
        .email("email must be valid"),

    password: z.string().min(8, {
        message: "password must be at least 8 characters"
    })
})

export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        alert(values.email)
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <div>
                <div className="mt-40 ml-11 text-4xl tracking-widest">
                    Get Started 🎉
                </div>
                <div className="mt-3 ml-11 text-xs tracking-wide text-nobel">
                    create a new account
                </div>
            </div>

            <Button className="bg-darkcharcoal" variant="ghost">
                <div className="flex gap-2.5 self-center px-10 py-2.5 ">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aabd9950ae8ab447f50264004d37a6acf67ea21d31e9b0c21faa07dec172a75?"
                        className="shrink-0 aspect-square w-[18px]"
                    />
                    <div className="flex-auto my-auto" >Continue with Github</div>
                </div>

            </Button>
            <div>or</div>


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>email</FormLabel>
                                <FormControl>
                                    <Input className="w-48 h-5 bg-darkcharcoal text-dovegray" placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                    <Input className="w-48 h-5 bg-darkcharcoal text-dovegray" placeholder="yourpassword" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="submit" className="w-full h-8" type="submit">Submit</Button>

                </form>
            </Form>

        </div>
    )
}
