/**
 * @File @todo FileDescription
 *
 * @Author Alexander Bassov Mon Nov 28 2022 9:58:46 PM
 * @Email blackxes.dev@gmail.com
 */

// Global declarations
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.webp";
declare module "*.webm";

declare module "*.pdf";

declare var ENV: {
    APP_MODE: string | "development" | "production" | "stagging";
    BASE_URL: string;
    BASE_NAME: string;
    API_URL: string;
    APP_TITLE: string;
};
