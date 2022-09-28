import { useLottie } from "lottie-react";
import animationData from "~/120096-ai-assistant-animation.json";

export default function Index() {
  let { View } = useLottie({ animationData });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      {View}
    </div>
  );
}
