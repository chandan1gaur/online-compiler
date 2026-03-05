import { redirect } from "next/navigation";

export default function JavascriptComingSoonRedirect() {
  // Redirect users and crawlers to the main JavaScript index page
  redirect("/javascript");
}
