import { useEffect, useState } from "react";
import axios from "./axios";

export const useActivitiesInfo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("controller/activity/all")
      .then(({ data }) => {
        const d = data.reduce(
          (
            acc,
            { activity_classes, link, title: activityTitle, priceInCents }
          ) => {
            acc.push(
              activity_classes.map(({ id, title }) => ({
                activityLink: link,
                activityTitle,
                price: priceInCents / 100,
                classId: id,
                classTitle: title,
              }))
            );

            return acc.flat();
          },
          []
        );
        //Glory to Ukraine
        setData([d[0], d[2], d[1], d[3]]);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return { data, loading: data == null, error };
};
