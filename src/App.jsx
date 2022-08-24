import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import ActivityCard from "./Activity";
import { useActivitiesInfo } from "./useActivitiesInfo";
import "./styles.scss";

export default function App() {
  const { data, error, loading } = useActivitiesInfo();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);

  const iframeRef = useRef(null);

  const handleOpen = (info) => {
    setInfo(info);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.addEventListener(
      "message",
      (ev) => {
        if (ev != null && ev.data === '{"status":"success"}') {
          console.log("Success ✔️");
          //hack to thank page
          iframeRef.current.className = "success";
        }
      },
      false
    );
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some error...</div>;

  return (
    <div className="activities">
      {data.map(
        ({ activityTitle, activityLink, classId, price, classTitle }) => (
          <ActivityCard
            key={classId}
            classId={classId}
            activityTitle={activityTitle}
            activityLink={activityLink}
            price={price}
            classTitle={classTitle}
            handleOpen={handleOpen}
          />
        )
      )}
      {info != null && (
        <Modal open={open} onClose={handleClose}>
          <div className="checkout-modal">
            <iframe
              src={`https://dev.arrange.com/checkout-page/${info.activityLink}?classId=${info.classId}&iframe=true`}
              title="test"
              ref={iframeRef}
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}
