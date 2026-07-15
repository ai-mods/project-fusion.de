import agentShot from "../assets/screenshots/agent.png";
import bridgeShot from "../assets/screenshots/bridge.png";
import courierShot from "../assets/screenshots/courier.png";
import memoryShot from "../assets/screenshots/memory.png";
import plannerShot from "../assets/screenshots/planner.png";
import scoutShot from "../assets/screenshots/scout.png";
import skillsShot from "../assets/screenshots/skills.png";
import trackerShot from "../assets/screenshots/tracker.png";

/** A single screenshot tab in the "App Preview" switcher (§6.6). */
export interface Tab {
  /** Lowercase id, matches the screenshot filename. */
  id: string;
  /** Uppercase label — identical in both languages, therefore a plain string. */
  label: string;
  image: ImageMetadata;
}

// Order = D1: Bridge first, rest alphabetical. The array order alone drives the tabs.
export const tabs: Tab[] = [
  { id: "bridge", label: "BRIDGE", image: bridgeShot },
  { id: "agent", label: "AGENT", image: agentShot },
  { id: "courier", label: "COURIER", image: courierShot },
  { id: "memory", label: "MEMORY", image: memoryShot },
  { id: "planner", label: "PLANNER", image: plannerShot },
  { id: "scout", label: "SCOUT", image: scoutShot },
  { id: "skills", label: "SKILLS", image: skillsShot },
  { id: "tracker", label: "TRACKER", image: trackerShot },
];
