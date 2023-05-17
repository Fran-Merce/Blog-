import { notFound as notFoundTrigger } from "next/navigation";

export default function NotFoundCatchAll() {
  notFoundTrigger();
}
