export function FormErrorList({ errors }: { errors: unknown }) {
  if (!errors || Object.keys(errors).length === 0) {
    return null;
  }

  return (
    <div className="alert alert-error">
      <ul className="list-inside list-disc">
        {Object.entries(errors).map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((error) => {
              if (typeof error === "object") {
                return Object.entries(error).map(([key, value]) => (
                  <ErrorItem
                    error={`${key}: ${(value as { message: string }).message}`}
                    key={key}
                  />
                ));
              }
              return null;
            });
          }
          return <ErrorItem error={value.message} key={key} />;
        })}
      </ul>
    </div>
  );
}

function ErrorItem({ error }: { error: unknown }) {
  if (!error || typeof error !== "string") {
    return null;
  }
  return <li className="text-destructive text-sm">{error}</li>;
}
