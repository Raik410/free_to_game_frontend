import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}
const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  const getErrorMessage = (): string => {
    if (!error) return ""; // Проверка на null или undefined
    return (
      error.statusText || error.message || "An unexpected error has occurred"
    );
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorMessage()}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
