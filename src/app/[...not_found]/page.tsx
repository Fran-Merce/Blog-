import { notFound as notFoundTrigger } from "next/navigation";

// import { NotFound } from "@/components/ui/NotFound/NotFound";

export default function NotFoundCatchAll() {
  notFoundTrigger();
}