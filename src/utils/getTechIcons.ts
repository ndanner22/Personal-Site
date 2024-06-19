import ReactIcon from "../../public/images/icons/react.png";
import NodejsIcon from "../../public/images/icons/nodejs.png";
import CssIcon from "../../public/images/icons/css.png";
import ExpoGoIcon from "../../public/images/icons/expogo.png";
import ExpressIcon from "../../public/images/icons/express.js.jpg";
import GoogleCloudIcon from "../../public/images/icons/google-cloud-vision.jpg";
import HtmlIcon from "../../public/images/icons/html.png";
import JavaScriptIcon from "../../public/images/icons/javascript.png";
import NativeWindIcon from "../../public/images/icons/postgres.png";
import PostgresIcon from "../../public/images/icons/native-wind.jpg";
import OpenAIIcon from "../../public/images/icons/openai.jpg";
import ReactNativeIcon from "../../public/images/icons/react-native.png";
import TailwindIcon from "../../public/images/icons/tailwind.png";
import TypeScriptIcon from "../../public/images/icons/ts-logo-128.png";
import AxiosIcon from "../../public/images/icons/axios.jpg";
import FireBaseAuthIcon from "../../public/images/icons/firebase-auth.jpg";

const techIcons: { [key: string]: string } = {
  react: ReactIcon,
  nodejs: NodejsIcon,
  css: CssIcon,
  expogo: ExpoGoIcon,
  express: ExpressIcon,
  googlecloud: GoogleCloudIcon,
  html: HtmlIcon,
  javascript: JavaScriptIcon,
  nativewind: NativeWindIcon,
  postgres: PostgresIcon,
  openai: OpenAIIcon,
  reactnative: ReactNativeIcon,
  tailwind: TailwindIcon,
  typescript: TypeScriptIcon,
  axios: AxiosIcon,
  firebaseauth: FireBaseAuthIcon,
};

export const getTechIcon = (tech: string): string => techIcons[tech] || "";
