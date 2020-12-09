import React from "react";
const useFetch = () => {
  const [categories, setCategories] = React.useState(null);
  const [responsibles, setResponsibles] = React.useState(null);

  React.useEffect(() => {
    Promise.all([getJsonData("categories"), getJsonData("responsibles")]).then(
      ([a, b]) => {
        setCategories(a);
        setResponsibles(b);
      }
    );
  }, []);

  function getJsonData(type) {
    return fetch(`/api/events?type=${type}`).then((r) => r.json());
  }

  return {
    categories,
    responsibles,
  };
};

export default useFetch;