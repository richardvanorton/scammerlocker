"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {reportWebsite} from "@/app/actions";
import { JSX, SVGProps } from "react"
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
import React, { useRef, useState } from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";



export function ReportForm() {
  const { toast } = useToast()
  const ref = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onCaptchaChange = (token: string) => setCaptchaToken(token);
  const onCaptchaExpire = () => setCaptchaToken(null);


  // @ts-ignore
  const reportWebsiteWithToken = reportWebsite.bind(null, captchaToken)



  return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
        <form ref={ref} action={async (formData) => {
          await reportWebsiteWithToken(formData)
          ref.current?.reset()
          captchaRef.current?.resetCaptcha()
        }}>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between dark:text-card-foreground">Scammerlocker v1
                <Link href="https://github.com/richardvanorton/scammerlocker" className="hover:text-primary transition-colors" prefetch={false}>
                <GithubIcon className="h-6 w-6" />
              </Link></CardTitle>
              <CardDescription>
                Submit to take down a website that is engaging in fraudulent or illegal activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Target URL</Label>
                <Input id="url" name="url" type="url" placeholder="Enter the URL of the website" required/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="explanation">Explain what kind of scam they are involved in</Label>
                <Textarea id="explanation" name="explanation" placeholder="Provide details about the scam or crime"
                          required/>
              </div>
              <HCaptcha
                  sitekey="3b74e6cc-ecd8-45b8-b954-016cfacee3f0"
                  onVerify={onCaptchaChange}
                  ref={captchaRef}
                  onExpire={onCaptchaExpire}
                  theme="dark"

              />
            </CardContent>

            <CardFooter className="flex justify-end">

              <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Domain take down is processing!",
                      description: "Your request was sent to the domain registrar. Estimated time for suspension is 2 weeks.",
                    })
                  }}
                  type="submit">Takedown!</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
  )
}
