import { redirect } from "next/navigation";

export default function BuchRedirect() {
  redirect("/survey?src=buch");
}
