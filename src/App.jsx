import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import ActivityCard from "./Activity";
import { useActivitiesInfo } from "./useActivitiesInfo";
import "./styles.scss";

export default function App() {
  const { data, error, loading } = useActivitiesInfo();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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
        if (ev != null && ev.data.type !== "webpackOk") {
          console.log("ev: ", ev);
          const data = JSON.parse(ev.data);
          console.log("data: ", data);

          if (data.width != null && data.height != null) {
            setWidth(data.width);
            setHeight(data.height);
          }
          if (data.status === "success") {
            console.log("Success ✔️");
            iframeRef.current.className = "success";
          }
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
              src={`http://localhost:3000/checkout-page/${info.activityLink}?classId=${info.classId}&iframe=true`}
              title="test"
              ref={iframeRef}
              width={width}
              height={height}
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}
