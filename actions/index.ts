"use server";
import { TimeSpan } from "oslo";

export async function action() {
  console.log(new TimeSpan(30, "d").seconds());
}
