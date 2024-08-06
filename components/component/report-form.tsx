
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {reportWebsite} from "@/app/actions";

export function ReportForm() {
  return (
      <form action={reportWebsite}>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Report Website Abuse</CardTitle>
              <CardDescription>
                Use this form to report a website that is engaging in abusive or illegal activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Target URL</Label>
                <Input id="url" type="url" name="url" placeholder="Enter the URL of the website" required/>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit">Submit Report</Button>

            </CardFooter>
          </Card>

        </div>
      </form>
  )
}
