import { useEffect, useState } from "react";

export default function useOrientation() {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");

  useEffect(() => {
    if (screen.orientation) {
      screen.orientation.addEventListener("change", () => {
        screen.orientation.type.includes("portrait")
          ? setOrientation("portrait")
          : setOrientation("landscape");
      });
    }
  }, []);

  return orientation;
}
