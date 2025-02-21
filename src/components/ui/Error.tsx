import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { ArrowLeft } from "lucide-react";

function Error() {
  const error = useRouteError() as { data?: string; message?: string };
  console.log(error);
  return (
    <div className="mt-16 flex flex-col items-center gap-6">
      <h1 className="heading-l">Something went wrong</h1>
      <p className="heading-m mb-6">{error.data || error.message || "An unknown error occurred"}</p>
      <LinkButton to="-1">
        <ArrowLeft size={24} /> Go Back
      </LinkButton>
    </div>
  );
}

export default Error;
