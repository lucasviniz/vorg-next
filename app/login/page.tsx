'use client'

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex items-center justify-center py-8 md:py-10 h-[calc(100vh-112px)]">
            <form className="flex flex-col gap-4">
                <Input
                    type="email"
                    label="Email"
                    placeholder="Informe seu email"
                    labelPlacement="outside"
                    startContent={
                        <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />

                <Input
                    label="Password"
                    placeholder="Digite sua senha"
                    labelPlacement="outside"
                    startContent={
                        <KeyRound className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                />

                <Button color="primary" variant="solid">
                    Entrar
                </Button>
            </form>
        </div>
    );
}