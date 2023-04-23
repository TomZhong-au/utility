import { useEffect, useState } from "react";

export default function useOrientation() {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

  useEffect(() => {
    const getOrientation = () => {
      if (screen.orientation) {
        screen.orientation.type.includes("portrait")
          ? setOrientation("portrait")
          : setOrientation("landscape");
      }
    };

    if (screen.orientation) {
      screen.orientation.addEventListener("change", getOrientation);
    }

    return () => {
      if (screen.orientation) {
        screen.orientation.removeEventListener("change", getOrientation);
      }
    };
  }, []);

  return orientation;
}
