import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="grid place-content-center"
    >
      <h1 className="text-center font-bold text-lg">Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p className="text-center">
        <i>{error.statusText | error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
