import reactLogo from "../assets/images/logos/react_logo.svg";
import typescriptLogo from "../assets/images/logos/typescript_logo.svg";
import mongoLogo from "../assets/images/logos/mongoDB_Logo.svg";
import awsLogo from "../assets/images/logos/aws_logo.svg";
import tailwindLogo from "../assets/images/logos/Tailwind_CSS_Logo.svg";
import azureLogo from "../assets/images/logos/azure-logo.svg";
import kubernetesLogo from "../assets/images/logos/kubernetes-logo.svg";
import dotnetLogo from "../assets/images/logos/dotnet.svg";
import sqlServerLogo from "../assets/images/logos/sql-server.svg";
import mysqlLogo from "../assets/images/logos/mysql.svg";
import nodejsLogo from "../assets/images/logos/nodejs.svg";
import cursorLogo from "../assets/images/logos/cursor.svg";
import claudeLogo from "../assets/images/logos/claude.svg";
import sddLogo from "../assets/images/logos/sdd.svg";
import apisBanner from "../assets/images/banners/apis.svg";
import cloudBanner from "../assets/images/banners/cloud.svg";
import dataBanner from "../assets/images/banners/data.svg";
import webBanner from "../assets/images/banners/web.svg";

export const EMAIL = "jeysson.cardenas.rojas@outlook.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jsdeveloper1990";
export const GITHUB_URL = "https://github.com/jeyssoncardenasdev";

export interface TechVisual {
  name: string;
  src: string;
}

/** Order matches messages.technologies.items in both locales. */
export const techVisuals: TechVisual[] = [
  { name: ".NET", src: dotnetLogo },
  { name: "SQL Server", src: sqlServerLogo },
  { name: "MySQL", src: mysqlLogo },
  { name: "Azure", src: azureLogo },
  { name: "AWS", src: awsLogo },
  { name: "TypeScript", src: typescriptLogo },
  { name: "React", src: reactLogo },
  { name: "Kubernetes", src: kubernetesLogo },
  { name: "MongoDB", src: mongoLogo },
  { name: "Node.js", src: nodejsLogo },
  { name: "Tailwind CSS", src: tailwindLogo },
  { name: "Cursor", src: cursorLogo },
  { name: "Claude Code", src: claudeLogo },
  { name: "SDD", src: sddLogo },
];

/** Order matches messages.services.items. One image at a time avoids duplicate SVG ids. */
export const serviceBanners = [apisBanner, cloudBanner, dataBanner, webBanner];
