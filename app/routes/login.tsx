import { Link } from "@remix-run/react";
import { Github } from "lucide-react";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function Login() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <AppLogo className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-xl font-semibold">Gitposter</h1>
        </Link>
      </nav>
      <div className="container flex flex-col justify-start items-center px-4 md:px-6 flex-1 mt-24">
        <div className="flex flex-col items-center space-y-4 text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Login in using <br />
            <span className="px-1 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Github
            </span>{" "}
            <br />
            and discover more
          </h1>

          <p className="text-gray-500 mt-2">
            Our posts and comments are powered by Markdown
          </p>
        </div>
        <Card className="relative group overflow-hidden rounded-lg">
          <CardContent className="p-1 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-gradient">
            <Button onClick={() => console.log("LOGIN")}>
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
